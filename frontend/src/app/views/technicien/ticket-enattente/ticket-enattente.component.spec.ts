import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketEnattenteComponent } from './ticket-enattente.component';

describe('TicketEnattenteComponent', () => {
  let component: TicketEnattenteComponent;
  let fixture: ComponentFixture<TicketEnattenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketEnattenteComponent]
    });
    fixture = TestBed.createComponent(TicketEnattenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
