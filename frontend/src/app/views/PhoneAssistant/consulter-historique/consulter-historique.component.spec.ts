import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterHistoriqueComponent } from './consulter-historique.component';

describe('ConsulterHistoriqueComponent', () => {
  let component: ConsulterHistoriqueComponent;
  let fixture: ComponentFixture<ConsulterHistoriqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsulterHistoriqueComponent]
    });
    fixture = TestBed.createComponent(ConsulterHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
