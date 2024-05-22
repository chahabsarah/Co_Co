import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderStatsComponent } from './gender-stats.component';

describe('GenderStatsComponent', () => {
  let component: GenderStatsComponent;
  let fixture: ComponentFixture<GenderStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenderStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
