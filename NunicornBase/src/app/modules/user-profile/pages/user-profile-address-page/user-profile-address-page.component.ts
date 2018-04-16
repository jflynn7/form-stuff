import { Component, Injector, OnInit } from '@angular/core';
import { FormDetails } from 'ng2-simple-forms';
import { PagebaseComponent } from '../../../../pages/pagebase/pagebase.component';

@Component({
  selector: 'app-user-profile-address-page',
  templateUrl: './user-profile-address-page.component.html',
  styleUrls: ['./user-profile-address-page.component.scss']
})
export class UserProfileAddressPageComponent extends PagebaseComponent implements OnInit {

  userForm: FormDetails;

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

}
