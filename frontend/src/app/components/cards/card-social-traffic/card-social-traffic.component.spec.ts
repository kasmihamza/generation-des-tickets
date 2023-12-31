import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSocialTrafficComponent } from './card-social-traffic.component';

describe('CardSocialTrafficComponent', () => {
  let component: CardSocialTrafficComponent;
  let fixture: ComponentFixture<CardSocialTrafficComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSocialTrafficComponent]
    });
    fixture = TestBed.createComponent(CardSocialTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
