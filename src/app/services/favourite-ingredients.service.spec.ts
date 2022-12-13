import { TestBed } from '@angular/core/testing';

import { FavouriteIngredientsService } from './favourite-ingredients.service';

describe('FavouriteIngredientsService', () => {
  let service: FavouriteIngredientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteIngredientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
