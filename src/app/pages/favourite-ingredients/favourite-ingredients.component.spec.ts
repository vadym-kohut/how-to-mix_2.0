import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteIngredientsComponent } from './favourite-ingredients.component';

describe('FavouriteIngredientsComponent', () => {
  let component: FavouriteIngredientsComponent;
  let fixture: ComponentFixture<FavouriteIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteIngredientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
