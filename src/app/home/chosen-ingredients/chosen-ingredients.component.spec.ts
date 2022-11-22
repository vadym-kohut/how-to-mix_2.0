import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenIngredientsComponent } from './chosen-ingredients.component';

describe('ChosenIngredientsComponent', () => {
  let component: ChosenIngredientsComponent;
  let fixture: ComponentFixture<ChosenIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosenIngredientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChosenIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
