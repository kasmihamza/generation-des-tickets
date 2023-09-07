import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTicketSupComponent } from './ajouter-ticket-sup.component';

describe('AjouterTicketSupComponent', () => {
  let component: AjouterTicketSupComponent;
  let fixture: ComponentFixture<AjouterTicketSupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterTicketSupComponent]
    });
    fixture = TestBed.createComponent(AjouterTicketSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
