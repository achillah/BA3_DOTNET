import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteApprentissageComponent } from './activite-apprentissage.component';

describe('ActiviteApprentissageComponent', () => {
  let component: ActiviteApprentissageComponent;
  let fixture: ComponentFixture<ActiviteApprentissageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiviteApprentissageComponent]
    });
    fixture = TestBed.createComponent(ActiviteApprentissageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
