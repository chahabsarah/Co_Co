import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleStatsComponent } from './role-stats.component';

describe('RoleStatsComponent', () => {
  let component: RoleStatsComponent;
  let fixture: ComponentFixture<RoleStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
