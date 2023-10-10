import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCapaciteComponent } from './edit-capacite.component';

describe('EditCapaciteComponent', () => {
  let component: EditCapaciteComponent;
  let fixture: ComponentFixture<EditCapaciteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCapaciteComponent]
    });
    fixture = TestBed.createComponent(EditCapaciteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
