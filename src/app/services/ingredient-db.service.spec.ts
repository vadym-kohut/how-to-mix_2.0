import { TestBed } from '@angular/core/testing';

import { IngredientDBService } from './ingredient-db.service';

describe('IngredientDBService', () => {
  let service: IngredientDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
