import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-attendee-display',
  templateUrl: './attendee-display.component.html',
  styleUrls: ['./attendee-display.component.scss']
})
export class AttendeeDisplayComponent implements OnInit {

  @Input() attendee: Attendee;
  @Input() collapsed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getInitials(attendee: Attendee) {
    const names: string[] = attendee.name.split(' ');
    let initials: string = '';

    names.forEach((name: string) => {
      initials += name.charAt(0);
    });

    return initials.toUpperCase();
  }

}

export interface Attendee {
  name?: string;
  position?: string;
  email?: string;
  avatar?: string;
}
