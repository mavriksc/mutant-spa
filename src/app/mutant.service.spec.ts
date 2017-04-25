import { TestBed, inject } from '@angular/core/testing';

import { MutantService } from './mutant.service';

describe('MutantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MutantService]
    });
  });

  it('should ...', inject([MutantService], (service: MutantService) => {
    expect(service).toBeTruthy();
  }));
});
