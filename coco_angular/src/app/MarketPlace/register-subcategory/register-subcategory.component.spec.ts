import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSubcategoryComponent } from './register-subcategory.component';

describe('RegisterSubcategoryComponent', () => {
  let component: RegisterSubcategoryComponent;
  let fixture: ComponentFixture<RegisterSubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSubcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
