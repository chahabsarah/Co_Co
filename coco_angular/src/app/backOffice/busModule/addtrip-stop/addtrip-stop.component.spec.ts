import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtripStopComponent } from './addtrip-stop.component';

describe('AddtripStopComponent', () => {
  let component: AddtripStopComponent;
  let fixture: ComponentFixture<AddtripStopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtripStopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtripStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
