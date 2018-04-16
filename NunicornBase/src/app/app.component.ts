import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AppSettings } from './app.settings';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('content') content: ElementRef;

  constructor(private userService: UserService, private renderer2: Renderer2) {}

  ngOnInit() {
    this.userService.getUserSession();
  }

  ngAfterViewInit() {
    this.renderer2.setStyle(this.content.nativeElement, 'padding-top', `${AppSettings.HEADER_HEIGHT + 10}px` );
  }
}
