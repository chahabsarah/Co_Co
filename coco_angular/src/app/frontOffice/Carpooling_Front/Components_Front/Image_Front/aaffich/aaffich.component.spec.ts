import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaffichComponent } from './aaffich.component';

describe('AaffichComponent', () => {
  let component: AaffichComponent;
  let fixture: ComponentFixture<AaffichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaffichComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AaffichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
