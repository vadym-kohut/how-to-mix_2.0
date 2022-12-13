import { TestBed } from '@angular/core/testing';

import { ChosenIngService } from './chosen-ing.service';

describe('ChosenIngService', () => {
  let service: ChosenIngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChosenIngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
