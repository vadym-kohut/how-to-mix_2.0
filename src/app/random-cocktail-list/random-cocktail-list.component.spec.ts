import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCocktailListComponent } from './random-cocktail-list.component';

describe('RandomCocktailListComponent', () => {
  let component: RandomCocktailListComponent;
  let fixture: ComponentFixture<RandomCocktailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomCocktailListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomCocktailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
