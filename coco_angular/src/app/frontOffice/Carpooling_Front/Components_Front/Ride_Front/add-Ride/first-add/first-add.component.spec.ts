import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAddComponent } from './first-add.component';

describe('FirstAddComponent', () => {
  let component: FirstAddComponent;
  let fixture: ComponentFixture<FirstAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
