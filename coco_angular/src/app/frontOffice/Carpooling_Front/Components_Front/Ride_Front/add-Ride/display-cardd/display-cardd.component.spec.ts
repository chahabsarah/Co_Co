import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCarddComponent } from './display-cardd.component';

describe('DisplayCarddComponent', () => {
  let component: DisplayCarddComponent;
  let fixture: ComponentFixture<DisplayCarddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCarddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCarddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
