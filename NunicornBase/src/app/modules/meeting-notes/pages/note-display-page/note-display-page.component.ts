import { Component, OnInit } from '@angular/core';
import { CardOptions } from '../../../components/presentation-wrappers/card/card.component';
import { NoteEvent, NoteItem } from '../../components/note-item/note-item.component';
import { ElementOption, Elements, FormDetails, SimpleFormBuilder as builder } from 'ng2-simple-forms';
import { Attendee } from '../../components/attendee-display/attendee-display.component';

@Component({
  selector: 'app-note-display-page',
  templateUrl: './note-display-page.component.html',
  styleUrls: ['./note-display-page.component.scss']
})
export class NoteDisplayPageComponent implements OnInit {

  attendeeCardOptions: CardOptions = { hoverClass: 'attendee-display-card', hasEdit: true, hasClose: true };
  attendeesCollapsed: boolean = false;

  // Forms
  noteItemForm: FormDetails;
  attendeeForm: FormDetails;

  // Sample Attendees
  attendees: Attendee[] = [
    <Attendee> {
      name: 'Joe Flynn',
      position: 'Consultant',
      email: 'jflynn@deloitte.co.uk',
      avatar: 'https://picsum.photos/200?image=34'
    },
    <Attendee> {
      name: 'John Doe',
      position: 'Analyst',
      email: 'jdoe@somecompany.co.uk',
      avatar: 'https://picsum.photos/200?image=92'
    },
    <Attendee> {
      name: 'Michelle Obama',
      position: 'Analyst',
      email: 'jdoe@somecompany.co.uk',
      avatar: 'https://picsum.photos/200?image=12'
    }
  ];

  // Sample Note Items
  // @TODO - Load from server
  noteItems: NoteItem[] = [
    <NoteItem> {
      attendee: this.getAttendee('Joe Flynn'),
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue sed turpis et maximus. In sed nunc bibendum, interdum lorem aliquam, pretium turpis',
    },
    <NoteItem> {
      attendee: this.getAttendee('John Doe'),
      note: 'Phasellus magna ex, facilisis in sollicitudin sed, vehicula a risus. Integer tempus magna nec tortor eleifend, ac rutrum nisl egestas. Sed iaculis elit enim, non aliquam neque placerat a. Aenean tempus mi ut risus tempor, ut congue felis egestas.',
      action: 'Integer eget ullamcorper ipsum. Nulla velit diam, molestie a metus ut, by 23rd May consectetur posuere mauris.'
    },
    <NoteItem> {
      attendee: this.getAttendee('Michelle Obama'),
      note: 'Curabitur vel turpis viverra, pretium tortor in, pulvinar quam. Cras augue turpis, finibus sit amet pulvinar quis, dapibus eget ex. Vestibulum gravida, velit non ornare dignissim, justo odio ultrices magna, molestie pharetra tortor purus non ligula.',
    }
  ];


  constructor() { }

  ngOnInit() {
    this.noteItemForm = this.getNoteForm();
    this.attendeeForm = this.getAttendeeForm();
  }

  toggleAttendees() {
    this.attendeesCollapsed = !this.attendeesCollapsed;
  }

  /// Notes
  addNewNote() {
    this.noteItems.push(
      <NoteItem> {
        attendee: this.noteItemForm.formGroup.get('attendee').value,
        note: this.noteItemForm.formGroup.get('note').value,
        action: this.noteItemForm.formGroup.get('action').value
      });
    this.noteItemForm.formGroup.reset();
  }

  getAttendee(name: string) {
    return this.attendees.filter((attendee: Attendee) => {
      return attendee.name === name;
    })[0];
  }

  getAction(action: NoteEvent) {
    if (action.type === 'edit') {
      this.editNote(action.index);
    } else {
      this.deleteNote(action.index);
    }
  }

  editNote(index: number) {
    this.noteItemForm.formGroup.setValue(this.noteItems[index]);
    this.deleteNote(index);
  }

  deleteNote(index: number) {
    this.noteItems.splice(index, 1);
  }

  getNoteForm() {
    return builder.toFormDetails([
      builder.createElement(Elements.ObjectSelector, 'Attendee', { optionObjects: this.attendees }, { objectDisplayProperty: 'name' }),
      builder.createElement(Elements.Textarea, 'Note'),
      builder.createElement(Elements.Textarea, 'Action')
    ]);
  }

  getAttendeeForm() {
    return builder.toFormDetails([
      builder.createElement(Elements.Text, 'Name'),
      builder.createElement(Elements.Text, 'Position'),
      builder.createElement(Elements.Text, 'EMail'),
    ]);
  }

  /// Attendees
  editAttendee(index: number) {
    this.attendeeForm.formGroup.setValue(this.attendees[index]);
    this.removeAttendee(index);
  }

  addAttendee() {
    const attendee: Attendee = this.attendeeForm.formGroup.getRawValue();
    attendee.avatar = 'https://picsum.photos/200?image=' + this.attendees.length;
    this.attendees.push(attendee);
    this.attendeeForm.formGroup.reset();
  }

  removeAttendee(index: number) {
   this.attendees.splice(index, 1);
  }

}
