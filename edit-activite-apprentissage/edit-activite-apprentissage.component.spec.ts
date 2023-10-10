import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditActiviteApprentissageComponent } from './edit-activite-apprentissage.component';

describe('EditActiviteApprentissageComponent', () => {
  let component: EditActiviteApprentissageComponent;
  let fixture: ComponentFixture<EditActiviteApprentissageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditActiviteApprentissageComponent]
    });
    fixture = TestBed.createComponent(EditActiviteApprentissageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
