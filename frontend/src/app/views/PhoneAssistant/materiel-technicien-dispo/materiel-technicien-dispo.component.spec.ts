import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielTechnicienDispoComponent } from './materiel-technicien-dispo.component';

describe('MaterielTechnicienDispoComponent', () => {
  let component: MaterielTechnicienDispoComponent;
  let fixture: ComponentFixture<MaterielTechnicienDispoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterielTechnicienDispoComponent]
    });
    fixture = TestBed.createComponent(MaterielTechnicienDispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
