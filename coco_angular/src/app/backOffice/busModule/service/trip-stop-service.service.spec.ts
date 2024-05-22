import { TestBed } from '@angular/core/testing';

import { TripStopServiceService } from './trip-stop-service.service';

describe('TripStopServiceService', () => {
  let service: TripStopServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripStopServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
