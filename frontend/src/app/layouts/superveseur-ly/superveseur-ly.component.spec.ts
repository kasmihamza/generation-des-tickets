import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperveseurLyComponent } from './superveseur-ly.component';

describe('SuperveseurLyComponent', () => {
  let component: SuperveseurLyComponent;
  let fixture: ComponentFixture<SuperveseurLyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperveseurLyComponent]
    });
    fixture = TestBed.createComponent(SuperveseurLyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
