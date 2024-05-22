import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCatBackComponent } from './add-cat-back.component';

describe('AddCatBackComponent', () => {
  let component: AddCatBackComponent;
  let fixture: ComponentFixture<AddCatBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCatBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCatBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
