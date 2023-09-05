import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponsibiliteComponent } from './disponsibilite.component';

describe('DisponsibiliteComponent', () => {
  let component: DisponsibiliteComponent;
  let fixture: ComponentFixture<DisponsibiliteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisponsibiliteComponent]
    });
    fixture = TestBed.createComponent(DisponsibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
