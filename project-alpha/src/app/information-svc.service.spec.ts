import { TestBed } from '@angular/core/testing';

import { InformationSvcService } from './information-svc.service';

describe('InformationSvcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformationSvcService = TestBed.get(InformationSvcService);
    expect(service).toBeTruthy();
  });
});
