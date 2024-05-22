import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubscriptionComponent } from './addsubscription.component';

describe('AddsubscriptionComponent', () => {
  let component: AddsubscriptionComponent;
  let fixture: ComponentFixture<AddsubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsubscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
