import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteDisplayPageComponent } from './pages/note-display-page/note-display-page.component';
import { NoteItemComponent } from './components/note-item/note-item.component';
import { AttendeeDisplayComponent } from './components/attendee-display/attendee-display.component';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleFormsModule } from 'ng2-simple-forms';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    SimpleFormsModule
  ],
  declarations: [NoteDisplayPageComponent, NoteItemComponent, AttendeeDisplayComponent]
})
export class MeetingNotesModule { }
