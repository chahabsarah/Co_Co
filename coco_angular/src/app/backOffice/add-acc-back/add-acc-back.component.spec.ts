import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccBackComponent } from './add-acc-back.component';

describe('AddAccBackComponent', () => {
  let component: AddAccBackComponent;
  let fixture: ComponentFixture<AddAccBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAccBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAccBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
