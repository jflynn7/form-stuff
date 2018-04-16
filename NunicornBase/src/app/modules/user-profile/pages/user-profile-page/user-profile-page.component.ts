import { Component, Injector, OnInit } from '@angular/core';
import { FormDetails } from 'ng2-simple-forms';
import { PagebaseComponent } from '../../../../pages/pagebase/pagebase.component';
import { Address, UserProfile } from '../../../../services/user-service-types';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent extends PagebaseComponent implements OnInit {

  userForm: FormDetails;

  now: number;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
      this.userService.getUserForm().subscribe((form: FormDetails) => {
        if (form) {
          this.userForm = form;
        }
      });
      if (!this.userService.loggedInUser.getValue()) {
        this.userService.getUserSession();
      }
  }

  getAddresses(): Address[] {
    return this.loggedInUser.userProfile.addresses || [];
  }

  update() {
    const userProfile = new UserProfile({
      id: this.loggedInUser.userProfile.id,
      addresses: this.getAddresses(),
    });

    Object.keys(userProfile).forEach((key: string) => {
      if (key !== 'id') {
        userProfile[key] = this.formUtils.getValue(key, this.userForm);
      }
    });

    this.userService.updateProfile(userProfile);
  }

}
