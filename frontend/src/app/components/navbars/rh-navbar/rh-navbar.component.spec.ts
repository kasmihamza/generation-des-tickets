import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhNavbarComponent } from './rh-navbar.component';

describe('RhNavbarComponent', () => {
  let component: RhNavbarComponent;
  let fixture: ComponentFixture<RhNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RhNavbarComponent]
    });
    fixture = TestBed.createComponent(RhNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
