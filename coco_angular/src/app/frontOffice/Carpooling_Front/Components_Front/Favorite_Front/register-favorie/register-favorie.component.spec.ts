import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFavorieComponent } from './register-favorie.component';

describe('RegisterFavorieComponent', () => {
  let component: RegisterFavorieComponent;
  let fixture: ComponentFixture<RegisterFavorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFavorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFavorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
