import { TestBed } from '@angular/core/testing';

import { FavoriteproductService } from './favoriteproduct.service';

describe('FavoriteproductService', () => {
  let service: FavoriteproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
