import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTicketAssistantComponent } from './modifier-ticket-assistant.component';

describe('ModifierTicketAssistantComponent', () => {
  let component: ModifierTicketAssistantComponent;
  let fixture: ComponentFixture<ModifierTicketAssistantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierTicketAssistantComponent]
    });
    fixture = TestBed.createComponent(ModifierTicketAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
