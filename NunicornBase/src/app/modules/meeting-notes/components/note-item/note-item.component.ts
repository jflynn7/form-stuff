import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Attendee } from '../attendee-display/attendee-display.component';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent implements OnInit {

  @Input() noteItem: NoteItem;
  @Input() noteIndex: number;

  @Output() output: EventEmitter<NoteEvent> = new EventEmitter<NoteEvent>();

  constructor() { }

  ngOnInit() {
  }

  editNote(index: number) {
    this.output.emit({
      type: 'edit',
      index: index
    });
  }

  deleteNote(index: number) {
    this.output.emit({
      type: 'delete',
      index: index
    });
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

export interface NoteItem {
  attendee?: Attendee;
  time?: string;
  note?: string;
  action?: string;
}

export interface NoteEvent {
  type?: string;
  index?: number;
}
