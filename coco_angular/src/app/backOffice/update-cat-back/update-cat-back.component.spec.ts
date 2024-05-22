import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCatBackComponent } from './update-cat-back.component';

describe('UpdateCatBackComponent', () => {
  let component: UpdateCatBackComponent;
  let fixture: ComponentFixture<UpdateCatBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCatBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCatBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
