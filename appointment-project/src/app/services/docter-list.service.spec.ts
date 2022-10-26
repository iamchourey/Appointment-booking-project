import { TestBed } from '@angular/core/testing';

import { DocterListService } from './docter-list.service';

describe('DocterListService', () => {
  let service: DocterListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocterListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
