import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTechnicienComponent } from './ajouter-technicien.component';

describe('AjouterTechnicienComponent', () => {
  let component: AjouterTechnicienComponent;
  let fixture: ComponentFixture<AjouterTechnicienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterTechnicienComponent]
    });
    fixture = TestBed.createComponent(AjouterTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
