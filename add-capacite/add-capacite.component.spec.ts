import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCapaciteComponent } from './add-capacite.component';

describe('AddCapaciteComponent', () => {
  let component: AddCapaciteComponent;
  let fixture: ComponentFixture<AddCapaciteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCapaciteComponent]
    });
    fixture = TestBed.createComponent(AddCapaciteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
