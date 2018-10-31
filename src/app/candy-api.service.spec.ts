import { TestBed } from '@angular/core/testing';

import { CandyApiService } from './candy-api.service';

describe('CandyApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandyApiService = TestBed.get(CandyApiService);
    expect(service).toBeTruthy();
  });
});
