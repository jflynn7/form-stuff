import { Component, OnInit } from '@angular/core';
import { FormDetails } from 'ng2-simple-forms';
import { PagebaseComponent } from '../../../../pages/pagebase/pagebase.component';

@Component({
  selector: 'app-user-profile-details-page',
  templateUrl: './user-profile-details-page.component.html',
  styleUrls: ['./user-profile-details-page.component.scss']
})
export class UserProfileDetailsPageComponent extends PagebaseComponent implements OnInit {

  userForm: FormDetails;

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

