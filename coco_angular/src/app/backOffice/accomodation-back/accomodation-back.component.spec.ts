import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationBackComponent } from './accomodation-back.component';

describe('AccomodationBackComponent', () => {
  let component: AccomodationBackComponent;
  let fixture: ComponentFixture<AccomodationBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccomodationBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccomodationBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
