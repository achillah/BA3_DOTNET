import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActiviteApprentissageComponent } from './add-activite-apprentissage.component';

describe('AddActiviteApprentissageComponent', () => {
  let component: AddActiviteApprentissageComponent;
  let fixture: ComponentFixture<AddActiviteApprentissageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddActiviteApprentissageComponent]
    });
    fixture = TestBed.createComponent(AddActiviteApprentissageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
