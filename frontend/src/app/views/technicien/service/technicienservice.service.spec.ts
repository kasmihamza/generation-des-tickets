import { TestBed } from '@angular/core/testing';

import { TechnicienserviceService } from './technicienservice.service';

describe('TechnicienserviceService', () => {
  let service: TechnicienserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnicienserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
