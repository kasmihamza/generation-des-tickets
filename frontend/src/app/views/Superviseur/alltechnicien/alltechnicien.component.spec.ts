import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltechnicienComponent } from './alltechnicien.component';

describe('AlltechnicienComponent', () => {
  let component: AlltechnicienComponent;
  let fixture: ComponentFixture<AlltechnicienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlltechnicienComponent]
    });
    fixture = TestBed.createComponent(AlltechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
