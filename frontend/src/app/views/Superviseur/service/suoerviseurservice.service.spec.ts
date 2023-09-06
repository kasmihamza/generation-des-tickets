import { TestBed } from '@angular/core/testing';

import { SuoerviseurserviceService } from './suoerviseurservice.service';

describe('SuoerviseurserviceService', () => {
  let service: SuoerviseurserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuoerviseurserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
