import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBackComponent } from './category-back.component';

describe('CategoryBackComponent', () => {
  let component: CategoryBackComponent;
  let fixture: ComponentFixture<CategoryBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
