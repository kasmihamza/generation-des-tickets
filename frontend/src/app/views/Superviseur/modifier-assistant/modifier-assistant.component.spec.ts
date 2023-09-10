import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAssistantComponent } from './modifier-assistant.component';

describe('ModifierAssistantComponent', () => {
  let component: ModifierAssistantComponent;
  let fixture: ComponentFixture<ModifierAssistantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierAssistantComponent]
    });
    fixture = TestBed.createComponent(ModifierAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
