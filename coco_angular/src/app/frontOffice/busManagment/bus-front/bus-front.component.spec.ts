import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusFrontComponent } from './bus-front.component';

describe('BusFrontComponent', () => {
  let component: BusFrontComponent;
  let fixture: ComponentFixture<BusFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
