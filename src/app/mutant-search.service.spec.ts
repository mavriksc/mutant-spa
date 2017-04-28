import { TestBed, inject } from '@angular/core/testing';

import { MutantSearchService } from './mutant-search.service';

describe('MutantSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MutantSearchService]
    });
  });

  it('should ...', inject([MutantSearchService], (service: MutantSearchService) => {
    expect(service).toBeTruthy();
  }));
});
