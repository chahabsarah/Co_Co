import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAccomodationComponent } from './details-accomodation.component';

describe('DetailsAccomodationComponent', () => {
  let component: DetailsAccomodationComponent;
  let fixture: ComponentFixture<DetailsAccomodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAccomodationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAccomodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
