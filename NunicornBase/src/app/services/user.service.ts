import { Injectable } from '@angular/core';
import { User, UserProfile } from './user-service-types';
import { HttpService } from './http.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AppSettings } from '../app.settings';
import { SimpleFormBuilder as builder, FormDetails, Styles, Elements, ElementOption } from 'ng2-simple-forms';
import { FormDefinitions } from '../utils/form-definitions';
import { FormUtils } from '../utils/form-utils';
import { Router } from '@angular/router';
import { TabSetItem } from '../modules/components/tab-set/tab-set.component';
import { LoginRequest } from '../modules/components/login/login.component';

@Injectable()
export class UserService {

  loggedInUser: BehaviorSubject<User> = new BehaviorSubject<User>(undefined);
  loginError: BehaviorSubject<string> = new BehaviorSubject<string>('');
  checkingLoginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userForm: BehaviorSubject<FormDetails> = new BehaviorSubject<FormDetails>(null);
  countryDetails: BehaviorSubject<ElementOption[]> = new BehaviorSubject<ElementOption[]>(null);

  xsrfToken: string;
  userId: number | string;

  userFormDetails: FormDetails;
  formUtils: FormUtils = new FormUtils();
  formDefinitions: FormDefinitions = new FormDefinitions();

  constructor(private httpService: HttpService, private router: Router) {
    // Get Country Options and create User form
    this.getCountryOptions().subscribe(countryList => {
      this.countryDetails.next(countryList);
      if (countryList.length > 0) {
        if (!this.userFormDetails) {
          this.userFormDetails = builder.toFormDetails(this.formDefinitions.getUserProfileForm(countryList))
            .setGlobalStyle(Styles.ElementWrapper, 'user-profile-form')
            .setGlobalStyle(Styles.ElementLabel, 'input-label')
            .setGlobalStyle(Styles.ElementInput, 'input-field');
          this.userForm.next(this.userFormDetails);
        } else {
          this.userForm.next(this.userFormDetails);
        }

        // When logged in user is received, update the userFormDetails
        this.loggedInUser.subscribe(user => {
          if (user) {
            this.formUtils.updateForm(user, this.userFormDetails);
            this.formUtils.updateForm(user.userProfile, this.userFormDetails);
            this.userForm.next(this.userFormDetails);
          }
        });
      }
    });
  }

  getCountryOptions() {
    if (this.countryDetails.getValue()) {
      return this.countryDetails;
    } else {
      return this.formUtils.getCountryOptions(this.httpService);
    }
  }

  getFullName() {
    return `${this.loggedInUser.getValue().firstName} ${this.loggedInUser.getValue().surname}`;
  }

  /**
   * Login user
   * @param {{username: string; password: string}} credentials
   */
  login(credentials: LoginRequest) {
    this.loginError.next('');
    this.checkingLoginStatus.next(true);
    this.httpService.doPost(AppSettings.LOGIN_API, credentials, true).subscribe(response => {
      this.xsrfToken = response.sessionXSRFtoken;
      this.userId = response.userId;
      this.loggedInUser.next(response);
      this.userLoggedIn.next(true);
      this.checkingLoginStatus.next(false);
      this.router.navigate([AppSettings.USER_PROFILE_HOME]);
    }, error => {
      console.log('error: ', error);
      this.loginError.next(error);
      this.checkingLoginStatus.next(false);
    });
  }

  logout() {
    this.httpService.doPost(AppSettings.LOGOUT_API, { id: this.userId }, true, this.xsrfToken).subscribe(() => {
      this.loggedInUser.next(undefined);
      this.userLoggedIn.next(false);
    });
  }

  updateProfile(userProfile: UserProfile) {
    this.httpService.doPost(AppSettings.UPDATE_PROFILE_API, userProfile, true).subscribe(() => {
      this.getUserSession();
    });
  }

  getUserForm() {
    return this.userForm;
  }

  /**
   * Get the User object
   * @TODO - Migrate to NGRX
   * @returns {User}
   */
  getUser() {
    return this.loggedInUser ? this.loggedInUser : undefined;
  }

  /**
   * Get logged in user via session
   */
  getUserSession() {
    this.httpService.doGet(AppSettings.AUTH_CHECK_API, true).subscribe(response => {
      if (response) {
        this.xsrfToken = response.sessionXSRFtoken;
        this.userId = response.userId;
        this.loggedInUser.next(response);
        this.userLoggedIn.next(true);
      } else {
        this.userLoggedIn.next(false);
      }
    });
  }

  getUserTabs(): TabSetItem[] {
    return [
      <TabSetItem> {
        title: 'Account Home',
        route: '/user-profile-home'
      },
      <TabSetItem> {
        title: 'Personal Details',
        route: '/user-profile-details'
      },
      <TabSetItem> {
        title: 'Address Details',
        route: '/user-profile-addresses'
      },
      <TabSetItem> {
        title: 'Employment Details',
        route: '/user-profile-employment'
      },
      <TabSetItem> {
        title: 'Account Settings',
        route: '/user-profile-settings'
      },
      <TabSetItem> {
        title: 'Logout',
        route: '/logout'
      }
    ];
  }

}
