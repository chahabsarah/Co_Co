import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteListOfAccommodationsComponent } from './favorite-list-of-accommodations.component';

describe('FavoriteListOfAccommodationsComponent', () => {
  let component: FavoriteListOfAccommodationsComponent;
  let fixture: ComponentFixture<FavoriteListOfAccommodationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteListOfAccommodationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteListOfAccommodationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
