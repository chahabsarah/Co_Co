import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectImageToCarComponent } from './affect-image-to-car.component';

describe('AffectImageToCarComponent', () => {
  let component: AffectImageToCarComponent;
  let fixture: ComponentFixture<AffectImageToCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectImageToCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffectImageToCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
