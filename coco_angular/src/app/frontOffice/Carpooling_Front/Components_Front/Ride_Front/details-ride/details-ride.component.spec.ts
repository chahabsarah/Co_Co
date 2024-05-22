import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRideComponent } from './details-ride.component';

describe('DetailsRideComponent', () => {
  let component: DetailsRideComponent;
  let fixture: ComponentFixture<DetailsRideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
