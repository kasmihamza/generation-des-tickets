import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketAffectedComponent } from './ticket-affected.component';

describe('TicketAffectedComponent', () => {
  let component: TicketAffectedComponent;
  let fixture: ComponentFixture<TicketAffectedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketAffectedComponent]
    });
    fixture = TestBed.createComponent(TicketAffectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
