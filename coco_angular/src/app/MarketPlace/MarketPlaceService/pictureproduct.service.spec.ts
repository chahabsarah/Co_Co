import { TestBed } from '@angular/core/testing';

import { PictureproductService } from './pictureproduct.service';

describe('PictureproductService', () => {
  let service: PictureproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PictureproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
