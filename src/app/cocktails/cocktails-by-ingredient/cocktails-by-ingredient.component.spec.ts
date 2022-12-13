import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsByIngredientComponent } from './cocktails-by-ingredient.component';

describe('CocktailsByIngredientComponent', () => {
  let component: CocktailsByIngredientComponent;
  let fixture: ComponentFixture<CocktailsByIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailsByIngredientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailsByIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
