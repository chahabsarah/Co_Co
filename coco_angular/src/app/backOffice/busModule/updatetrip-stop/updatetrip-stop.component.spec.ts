import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetripStopComponent } from './updatetrip-stop.component';

describe('UpdatetripStopComponent', () => {
  let component: UpdatetripStopComponent;
  let fixture: ComponentFixture<UpdatetripStopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetripStopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatetripStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
