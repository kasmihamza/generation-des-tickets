import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhprofileComponent } from './rhprofile.component';

describe('RhprofileComponent', () => {
  let component: RhprofileComponent;
  let fixture: ComponentFixture<RhprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RhprofileComponent]
    });
    fixture = TestBed.createComponent(RhprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
