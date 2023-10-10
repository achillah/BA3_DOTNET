import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaciteComponent } from './capacite.component';

describe('CapaciteComponent', () => {
  let component: CapaciteComponent;
  let fixture: ComponentFixture<CapaciteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapaciteComponent]
    });
    fixture = TestBed.createComponent(CapaciteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
