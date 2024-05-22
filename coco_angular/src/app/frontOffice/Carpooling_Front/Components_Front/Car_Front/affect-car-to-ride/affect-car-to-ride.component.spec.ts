import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectCarToRideComponent } from './affect-car-to-ride.component';

describe('AffectCarToRideComponent', () => {
  let component: AffectCarToRideComponent;
  let fixture: ComponentFixture<AffectCarToRideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectCarToRideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffectCarToRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
