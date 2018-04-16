import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeeDisplayComponent } from './attendee-display.component';

describe('AttendeeDisplayComponent', () => {
  let component: AttendeeDisplayComponent;
  let fixture: ComponentFixture<AttendeeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendeeDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendeeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
