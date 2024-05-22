import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAccBackComponent } from './detail-acc-back.component';

describe('DetailAccBackComponent', () => {
  let component: DetailAccBackComponent;
  let fixture: ComponentFixture<DetailAccBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAccBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAccBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
