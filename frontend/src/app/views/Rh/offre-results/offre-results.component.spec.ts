import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreResultsComponent } from './offre-results.component';

describe('OffreResultsComponent', () => {
  let component: OffreResultsComponent;
  let fixture: ComponentFixture<OffreResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffreResultsComponent]
    });
    fixture = TestBed.createComponent(OffreResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
