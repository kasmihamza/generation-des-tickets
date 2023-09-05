import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSidebarComponent } from './super-sidebar.component';

describe('SuperSidebarComponent', () => {
  let component: SuperSidebarComponent;
  let fixture: ComponentFixture<SuperSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperSidebarComponent]
    });
    fixture = TestBed.createComponent(SuperSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
