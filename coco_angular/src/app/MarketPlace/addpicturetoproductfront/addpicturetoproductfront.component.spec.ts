import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpicturetoproductfrontComponent } from './addpicturetoproductfront.component';

describe('AddpicturetoproductfrontComponent', () => {
  let component: AddpicturetoproductfrontComponent;
  let fixture: ComponentFixture<AddpicturetoproductfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpicturetoproductfrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpicturetoproductfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
