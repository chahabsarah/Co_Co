import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureproductComponent } from './pictureproduct.component';

describe('PictureproductComponent', () => {
  let component: PictureproductComponent;
  let fixture: ComponentFixture<PictureproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictureproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
