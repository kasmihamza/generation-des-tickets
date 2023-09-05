import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterTicketComponent } from './affecter-ticket.component';

describe('AffecterTicketComponent', () => {
  let component: AffecterTicketComponent;
  let fixture: ComponentFixture<AffecterTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffecterTicketComponent]
    });
    fixture = TestBed.createComponent(AffecterTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
