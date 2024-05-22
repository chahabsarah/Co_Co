import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubToCatComponent } from './add-sub-to-cat.component';

describe('AddSubToCatComponent', () => {
  let component: AddSubToCatComponent;
  let fixture: ComponentFixture<AddSubToCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubToCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubToCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
