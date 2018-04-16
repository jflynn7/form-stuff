import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileEmploymentPageComponent } from './user-profile-employment-page.component';

describe('UserProfileEmploymentPageComponent', () => {
  let component: UserProfileEmploymentPageComponent;
  let fixture: ComponentFixture<UserProfileEmploymentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileEmploymentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileEmploymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
