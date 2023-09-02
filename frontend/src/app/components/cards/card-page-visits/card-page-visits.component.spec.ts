import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPageVisitsComponent } from './card-page-visits.component';

describe('CardPageVisitsComponent', () => {
  let component: CardPageVisitsComponent;
  let fixture: ComponentFixture<CardPageVisitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPageVisitsComponent]
    });
    fixture = TestBed.createComponent(CardPageVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
