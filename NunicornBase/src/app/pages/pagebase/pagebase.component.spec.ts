import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagebaseComponent } from './pagebase.component';

describe('PagebaseComponent', () => {
  let component: PagebaseComponent;
  let fixture: ComponentFixture<PagebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
