import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyticketsSupComponent } from './mytickets-sup.component';

describe('MyticketsSupComponent', () => {
  let component: MyticketsSupComponent;
  let fixture: ComponentFixture<MyticketsSupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyticketsSupComponent]
    });
    fixture = TestBed.createComponent(MyticketsSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
