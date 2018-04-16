import { Component, Injector, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User, UserProfile } from '../../services/user-service-types';
import { HttpService } from '../../services/http.service';
import { FormUtils } from '../../utils/form-utils';
import { FormDefinitions } from '../../utils/form-definitions';
import { TransformationUtils } from '../../utils/transformation-utils';
import { AppSettings } from '../../app.settings';
import { Router } from '@angular/router';
import { FormDetails } from 'ng2-simple-forms';

@Component({
  selector: 'app-pagebase',
  templateUrl: './pagebase.component.html',
  styleUrls: ['./pagebase.component.scss']
})
export class PagebaseComponent implements OnInit {

  userService: UserService;
  httpService: HttpService;
  router: Router;

  formUtils: FormUtils = new FormUtils();
  transformationUtils: TransformationUtils = new TransformationUtils();

  displayDateFormat: string = AppSettings.DISPLAY_DATE_FORMAT;

  loggedInUser: User;
  userForm: FormDetails;

  constructor(private injector: Injector) {
    this.userService = this.injector.get(UserService);
    this.httpService = this.injector.get(HttpService);
    this.router = this.injector.get(Router);
    this.initUserService();
  }

  ngOnInit() {
  }

  initUserService() {
    this.userService.loggedInUser.subscribe(user => {
      this.loggedInUser = user;
    });

    this.userService.userForm.subscribe(form => {
      this.userForm = form;
    });
  }

  saveUserProfile() {
    const userProfile = new UserProfile({
      id: this.loggedInUser.userProfile.id
    });

    Object.keys(userProfile).forEach((key: string) => {
      if (key !== 'id') {
        userProfile[key] = this.formUtils.getValue(key, this.userForm);
      }
    });

    this.userService.updateProfile(userProfile);
  }

}
