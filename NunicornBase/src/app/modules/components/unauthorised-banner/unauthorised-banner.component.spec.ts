import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorisedBannerComponent } from './unauthorised-banner.component';

describe('UnauthorisedBannerComponent', () => {
  let component: UnauthorisedBannerComponent;
  let fixture: ComponentFixture<UnauthorisedBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthorisedBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthorisedBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
