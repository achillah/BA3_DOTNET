import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUniteEtudeComponent } from './add-unite-etude.component';

describe('AddUniteEtudeComponent', () => {
  let component: AddUniteEtudeComponent;
  let fixture: ComponentFixture<AddUniteEtudeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUniteEtudeComponent]
    });
    fixture = TestBed.createComponent(AddUniteEtudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
