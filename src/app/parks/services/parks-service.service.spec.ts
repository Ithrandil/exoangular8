import { TestBed } from '@angular/core/testing';

import { ParksServiceService } from './parks-service.service';

describe('ParksServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParksServiceService = TestBed.get(ParksServiceService);
    expect(service).toBeTruthy();
  });
});
