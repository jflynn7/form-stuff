import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileSettingsPageComponent } from './user-profile-settings-page.component';

describe('UserProfileSettingsPageComponent', () => {
  let component: UserProfileSettingsPageComponent;
  let fixture: ComponentFixture<UserProfileSettingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileSettingsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
