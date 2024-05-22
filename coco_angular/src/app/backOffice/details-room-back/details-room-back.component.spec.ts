import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRoomBackComponent } from './details-room-back.component';

describe('DetailsRoomBackComponent', () => {
  let component: DetailsRoomBackComponent;
  let fixture: ComponentFixture<DetailsRoomBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRoomBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsRoomBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
