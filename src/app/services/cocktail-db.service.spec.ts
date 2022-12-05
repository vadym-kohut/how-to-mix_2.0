import { TestBed } from '@angular/core/testing';

import { CocktailDBService } from './cocktail-db.service';

describe('CocktailDBService', () => {
  let service: CocktailDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
