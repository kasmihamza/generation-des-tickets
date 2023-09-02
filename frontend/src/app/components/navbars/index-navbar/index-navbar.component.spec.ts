import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexNavbarComponent } from './index-navbar.component';

describe('IndexNavbarComponent', () => {
  let component: IndexNavbarComponent;
  let fixture: ComponentFixture<IndexNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexNavbarComponent]
    });
    fixture = TestBed.createComponent(IndexNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
