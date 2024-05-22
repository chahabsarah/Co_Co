import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterReservationComponent } from './register-reservation.component';

describe('RegisterReservationComponent', () => {
  let component: RegisterReservationComponent;
  let fixture: ComponentFixture<RegisterReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
