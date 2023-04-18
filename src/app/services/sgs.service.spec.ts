import { TestBed } from '@angular/core/testing';

import { SGSService } from './sgs.service';

describe('SGSService', () => {
  let service: SGSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SGSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
