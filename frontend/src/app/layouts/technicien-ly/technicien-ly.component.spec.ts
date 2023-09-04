import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicienLyComponent } from './technicien-ly.component';

describe('TechnicienLyComponent', () => {
  let component: TechnicienLyComponent;
  let fixture: ComponentFixture<TechnicienLyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicienLyComponent]
    });
    fixture = TestBed.createComponent(TechnicienLyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
