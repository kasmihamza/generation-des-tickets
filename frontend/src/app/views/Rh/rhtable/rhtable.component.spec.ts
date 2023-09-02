import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhtableComponent } from './rhtable.component';

describe('RhtableComponent', () => {
  let component: RhtableComponent;
  let fixture: ComponentFixture<RhtableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RhtableComponent]
    });
    fixture = TestBed.createComponent(RhtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
