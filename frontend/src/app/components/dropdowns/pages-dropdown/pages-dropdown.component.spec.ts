import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesDropdownComponent } from './pages-dropdown.component';

describe('PagesDropdownComponent', () => {
  let component: PagesDropdownComponent;
  let fixture: ComponentFixture<PagesDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesDropdownComponent]
    });
    fixture = TestBed.createComponent(PagesDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
