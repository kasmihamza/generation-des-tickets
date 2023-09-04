import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterTicketComponent } from './consulter-ticket.component';

describe('ConsulterTicketComponent', () => {
  let component: ConsulterTicketComponent;
  let fixture: ComponentFixture<ConsulterTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsulterTicketComponent]
    });
    fixture = TestBed.createComponent(ConsulterTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
