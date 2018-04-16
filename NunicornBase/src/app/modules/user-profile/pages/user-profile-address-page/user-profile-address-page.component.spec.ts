import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileAddressPageComponent } from './user-profile-address-page.component';

describe('UserProfileAddressPageComponent', () => {
  let component: UserProfileAddressPageComponent;
  let fixture: ComponentFixture<UserProfileAddressPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileAddressPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileAddressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
