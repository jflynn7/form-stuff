import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileAvatarSectionComponent } from './user-profile-avatar-section.component';

describe('UserProfileAvatarSectionComponent', () => {
  let component: UserProfileAvatarSectionComponent;
  let fixture: ComponentFixture<UserProfileAvatarSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileAvatarSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileAvatarSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
