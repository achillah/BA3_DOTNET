import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompetenceComponent } from './edit-competence.component';

describe('EditCompetenceComponent', () => {
  let component: EditCompetenceComponent;
  let fixture: ComponentFixture<EditCompetenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCompetenceComponent]
    });
    fixture = TestBed.createComponent(EditCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
