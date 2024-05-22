import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStopComponent } from './update-stop.component';

describe('UpdateStopComponent', () => {
  let component: UpdateStopComponent;
  let fixture: ComponentFixture<UpdateStopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
