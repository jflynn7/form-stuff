import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AppSettings } from '../../../../app.settings';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../services/user-service-types';
import { SimpleFormBuilder as builder, FormDetails, Elements, Styles } from 'ng2-simple-forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnInit {

  @ViewChild('header') header: ElementRef;

  user: User;
  searchForm: FormDetails;

  constructor(private renderer2: Renderer2, public userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(loggedInUser => {
      this.user = loggedInUser;
    });

    this.searchForm = builder.toFormDetails([
      builder.createElement(Elements.Text, 'Search')
        .setStyle(Styles.ElementWrapper, 'header-search')
        .setStyle(Styles.ElementLabel, 'header-search-label')
        .setStyle(Styles.ElementInput, 'header-search-input')
    ]);
  }

  ngAfterViewInit() {
    this.renderer2.setStyle(this.header.nativeElement, 'height', `${AppSettings.HEADER_HEIGHT}px`);
  }

  logout() {
    this.userService.logout();
  }

  search() {
    console.log('Searching for', this.searchForm.formGroup.getRawValue());
  }
}
