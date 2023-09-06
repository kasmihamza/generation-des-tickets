import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAssistantComponent } from './ajouter-assistant.component';

describe('AjouterAssistantComponent', () => {
  let component: AjouterAssistantComponent;
  let fixture: ComponentFixture<AjouterAssistantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterAssistantComponent]
    });
    fixture = TestBed.createComponent(AjouterAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
