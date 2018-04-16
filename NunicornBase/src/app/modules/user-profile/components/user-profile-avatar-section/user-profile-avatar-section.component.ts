import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { FormDetails } from 'ng2-simple-forms';
import { TransformationUtils } from '../../../../utils/transformation-utils';
import { User } from '../../../../services/user-service-types';
import { AppSettings } from '../../../../app.settings';

@Component({
  selector: 'app-user-profile-avatar-section',
  templateUrl: './user-profile-avatar-section.component.html',
  styleUrls: ['./user-profile-avatar-section.component.scss']
})
export class UserProfileAvatarSectionComponent implements OnInit {

  @Input() user: User;

  userForm: FormDetails;
  transformationUtils: TransformationUtils = new TransformationUtils();
  displayDateFormat: string = AppSettings.DISPLAY_DATE_FORMAT;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.getUserForm().subscribe(form => {
      this.userForm = form;
    });
  }

}
