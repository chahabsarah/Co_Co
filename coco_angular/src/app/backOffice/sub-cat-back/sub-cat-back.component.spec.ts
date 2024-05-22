import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCatBackComponent } from './sub-cat-back.component';

describe('SubCatBackComponent', () => {
  let component: SubCatBackComponent;
  let fixture: ComponentFixture<SubCatBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCatBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCatBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
