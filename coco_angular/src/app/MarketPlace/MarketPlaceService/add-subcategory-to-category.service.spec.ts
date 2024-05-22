import { TestBed } from '@angular/core/testing';

import { AddSubcategoryToCategoryService } from './add-subcategory-to-category.service';

describe('AddSubcategoryToCategoryService', () => {
  let service: AddSubcategoryToCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSubcategoryToCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
