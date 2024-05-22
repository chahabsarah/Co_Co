import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpicturetoproductComponent } from './addpicturetoproduct.component';

describe('AddpicturetoproductComponent', () => {
  let component: AddpicturetoproductComponent;
  let fixture: ComponentFixture<AddpicturetoproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpicturetoproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpicturetoproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
