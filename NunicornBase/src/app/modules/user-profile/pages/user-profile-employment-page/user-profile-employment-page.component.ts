import { Component, Injector, OnInit } from '@angular/core';
import { PagebaseComponent } from '../../../../pages/pagebase/pagebase.component';

@Component({
  selector: 'app-user-profile-employment-page',
  templateUrl: './user-profile-employment-page.component.html',
  styleUrls: ['./user-profile-employment-page.component.scss']
})
export class UserProfileEmploymentPageComponent extends PagebaseComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
