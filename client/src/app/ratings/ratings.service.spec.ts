/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RatingsService } from './ratings.service';

describe('RatingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RatingsService]
    });
  });

  it('should ...', inject([RatingsService], (service: RatingsService) => {
    expect(service).toBeTruthy();
  }));
});
