import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRoomBackComponent } from './update-room-back.component';

describe('UpdateRoomBackComponent', () => {
  let component: UpdateRoomBackComponent;
  let fixture: ComponentFixture<UpdateRoomBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRoomBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRoomBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
