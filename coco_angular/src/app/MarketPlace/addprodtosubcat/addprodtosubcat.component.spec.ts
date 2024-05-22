import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprodtosubcatComponent } from './addprodtosubcat.component';

describe('AddprodtosubcatComponent', () => {
  let component: AddprodtosubcatComponent;
  let fixture: ComponentFixture<AddprodtosubcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprodtosubcatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddprodtosubcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
