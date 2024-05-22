import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckSubComponent } from './check-sub.component';

describe('CheckSubComponent', () => {
  let component: CheckSubComponent;
  let fixture: ComponentFixture<CheckSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckSubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
