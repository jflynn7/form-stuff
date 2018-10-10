import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NoteDisplayPageComponent } from './pages/note-display-page/note-display-page.component';

const routes: Routes = [
  {
    path: 'notes/:id',
    component: NoteDisplayPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class MeetingNotesRoutingModule { }
