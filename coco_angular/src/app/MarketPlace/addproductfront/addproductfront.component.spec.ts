import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductfrontComponent } from './addproductfront.component';

describe('AddproductfrontComponent', () => {
  let component: AddproductfrontComponent;
  let fixture: ComponentFixture<AddproductfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproductfrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddproductfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
