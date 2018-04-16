import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDisplayPageComponent } from './note-display-page.component';

describe('NoteDisplayPageComponent', () => {
  let component: NoteDisplayPageComponent;
  let fixture: ComponentFixture<NoteDisplayPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteDisplayPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
