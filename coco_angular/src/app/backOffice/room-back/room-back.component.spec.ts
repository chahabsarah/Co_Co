import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBackComponent } from './room-back.component';

describe('RoomBackComponent', () => {
  let component: RoomBackComponent;
  let fixture: ComponentFixture<RoomBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
