import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubCatBackComponent } from './add-sub-cat-back.component';

describe('AddSubCatBackComponent', () => {
  let component: AddSubCatBackComponent;
  let fixture: ComponentFixture<AddSubCatBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubCatBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubCatBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
