import { TestBed } from '@angular/core/testing';

import { SubcategoryProductService } from './subcategory-product.service';

describe('SubcategoryProductService', () => {
  let service: SubcategoryProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubcategoryProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
