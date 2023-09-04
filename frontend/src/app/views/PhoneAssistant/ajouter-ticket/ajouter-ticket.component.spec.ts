import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTicketComponent } from './ajouter-ticket.component';

describe('AjouterTicketComponent', () => {
  let component: AjouterTicketComponent;
  let fixture: ComponentFixture<AjouterTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterTicketComponent]
    });
    fixture = TestBed.createComponent(AjouterTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
