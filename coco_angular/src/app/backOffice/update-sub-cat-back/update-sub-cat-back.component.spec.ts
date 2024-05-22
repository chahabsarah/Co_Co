import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubCatBackComponent } from './update-sub-cat-back.component';

describe('UpdateSubCatBackComponent', () => {
  let component: UpdateSubCatBackComponent;
  let fixture: ComponentFixture<UpdateSubCatBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSubCatBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSubCatBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
