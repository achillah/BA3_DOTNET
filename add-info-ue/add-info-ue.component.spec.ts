import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInfoUeComponent } from './add-info-ue.component';

describe('AddInfoUeComponent', () => {
  let component: AddInfoUeComponent;
  let fixture: ComponentFixture<AddInfoUeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddInfoUeComponent]
    });
    fixture = TestBed.createComponent(AddInfoUeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
