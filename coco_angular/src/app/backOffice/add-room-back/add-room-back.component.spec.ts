import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomBackComponent } from './add-room-back.component';

describe('AddRoomBackComponent', () => {
  let component: AddRoomBackComponent;
  let fixture: ComponentFixture<AddRoomBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRoomBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRoomBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
