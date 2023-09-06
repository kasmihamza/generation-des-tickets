import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardlinechartComponent } from './cardlinechart.component';

describe('CardlinechartComponent', () => {
  let component: CardlinechartComponent;
  let fixture: ComponentFixture<CardlinechartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardlinechartComponent]
    });
    fixture = TestBed.createComponent(CardlinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
