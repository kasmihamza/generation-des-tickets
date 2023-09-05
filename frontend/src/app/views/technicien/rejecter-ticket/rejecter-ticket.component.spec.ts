import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejecterTicketComponent } from './rejecter-ticket.component';

describe('RejecterTicketComponent', () => {
  let component: RejecterTicketComponent;
  let fixture: ComponentFixture<RejecterTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejecterTicketComponent]
    });
    fixture = TestBed.createComponent(RejecterTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
