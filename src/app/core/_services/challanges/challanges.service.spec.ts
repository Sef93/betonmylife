import { TestBed } from '@angular/core/testing';

import { ChallangesService } from './challanges.service';

describe('ChallangesService', () => {
  let service: ChallangesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChallangesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
