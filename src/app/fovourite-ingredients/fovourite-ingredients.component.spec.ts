import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FovouriteIngredientsComponent } from './fovourite-ingredients.component';

describe('FovouriteIngredientsComponent', () => {
  let component: FovouriteIngredientsComponent;
  let fixture: ComponentFixture<FovouriteIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FovouriteIngredientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FovouriteIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
