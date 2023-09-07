import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTicketsComponent } from './modifier-tickets.component';

describe('ModifierTicketsComponent', () => {
  let component: ModifierTicketsComponent;
  let fixture: ComponentFixture<ModifierTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierTicketsComponent]
    });
    fixture = TestBed.createComponent(ModifierTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
