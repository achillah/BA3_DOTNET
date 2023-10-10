import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompetenceComponent } from './add-competence.component';

describe('AddCompetenceComponent', () => {
  let component: AddCompetenceComponent;
  let fixture: ComponentFixture<AddCompetenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCompetenceComponent]
    });
    fixture = TestBed.createComponent(AddCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
