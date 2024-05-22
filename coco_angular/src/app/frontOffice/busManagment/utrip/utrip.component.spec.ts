import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtripComponent } from './utrip.component';

describe('UtripComponent', () => {
  let component: UtripComponent;
  let fixture: ComponentFixture<UtripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
