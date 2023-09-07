import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterTicketSupComponent } from './affecter-ticket-sup.component';

describe('AffecterTicketSupComponent', () => {
  let component: AffecterTicketSupComponent;
  let fixture: ComponentFixture<AffecterTicketSupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffecterTicketSupComponent]
    });
    fixture = TestBed.createComponent(AffecterTicketSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
