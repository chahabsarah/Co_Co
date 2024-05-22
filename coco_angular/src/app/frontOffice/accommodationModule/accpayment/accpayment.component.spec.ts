import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccpaymentComponent } from './accpayment.component';

describe('AccpaymentComponent', () => {
  let component: AccpaymentComponent;
  let fixture: ComponentFixture<AccpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccpaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
