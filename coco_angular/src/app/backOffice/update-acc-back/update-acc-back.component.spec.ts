import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccBackComponent } from './update-acc-back.component';

describe('UpdateAccBackComponent', () => {
  let component: UpdateAccBackComponent;
  let fixture: ComponentFixture<UpdateAccBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAccBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAccBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
