import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordsSupComponent } from './dashbords-sup.component';

describe('DashbordsSupComponent', () => {
  let component: DashbordsSupComponent;
  let fixture: ComponentFixture<DashbordsSupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashbordsSupComponent]
    });
    fixture = TestBed.createComponent(DashbordsSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
