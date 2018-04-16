import { Component, Injector, OnInit } from '@angular/core';
import { PagebaseComponent } from '../../../../pages/pagebase/pagebase.component';

@Component({
  selector: 'app-user-profile-settings-page',
  templateUrl: './user-profile-settings-page.component.html',
  styleUrls: ['./user-profile-settings-page.component.scss']
})
export class UserProfileSettingsPageComponent extends PagebaseComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
