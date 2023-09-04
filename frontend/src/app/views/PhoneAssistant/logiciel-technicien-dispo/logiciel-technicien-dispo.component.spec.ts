import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicielTechnicienDispoComponent } from './logiciel-technicien-dispo.component';

describe('LogicielTechnicienDispoComponent', () => {
  let component: LogicielTechnicienDispoComponent;
  let fixture: ComponentFixture<LogicielTechnicienDispoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogicielTechnicienDispoComponent]
    });
    fixture = TestBed.createComponent(LogicielTechnicienDispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
