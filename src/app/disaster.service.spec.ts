import { TestBed, inject } from '@angular/core/testing';

import { DisasterService } from './disaster.service';

describe('DisasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisasterService]
    });
  });

  it('should ...', inject([DisasterService], (service: DisasterService) => {
    expect(service).toBeTruthy();
  }));
});
