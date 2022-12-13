import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenIngComponent } from './chosen-ing.component';

describe('ChosenIngComponent', () => {
  let component: ChosenIngComponent;
  let fixture: ComponentFixture<ChosenIngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosenIngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenIngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
