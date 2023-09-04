import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneAssistantLYComponent } from './phone-assistant-ly.component';

describe('PhoneAssistantLYComponent', () => {
  let component: PhoneAssistantLYComponent;
  let fixture: ComponentFixture<PhoneAssistantLYComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneAssistantLYComponent]
    });
    fixture = TestBed.createComponent(PhoneAssistantLYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
