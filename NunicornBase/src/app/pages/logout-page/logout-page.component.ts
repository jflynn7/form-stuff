import { Component, Injector, OnInit } from '@angular/core';
import { PagebaseComponent } from '../pagebase/pagebase.component';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.scss']
})
export class LogoutPageComponent extends PagebaseComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
