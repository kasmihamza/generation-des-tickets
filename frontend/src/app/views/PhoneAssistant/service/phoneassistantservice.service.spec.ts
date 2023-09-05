import { TestBed } from '@angular/core/testing';

import { PhoneassistantserviceService } from './phoneassistantservice.service';

describe('PhoneassistantserviceService', () => {
  let service: PhoneassistantserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneassistantserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
