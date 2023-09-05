import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSidebarComponent } from './tech-sidebar.component';

describe('TechSidebarComponent', () => {
  let component: TechSidebarComponent;
  let fixture: ComponentFixture<TechSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechSidebarComponent]
    });
    fixture = TestBed.createComponent(TechSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
