import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInfoUeComponent } from './edit-info-ue.component';

describe('EditInfoUeComponent', () => {
  let component: EditInfoUeComponent;
  let fixture: ComponentFixture<EditInfoUeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditInfoUeComponent]
    });
    fixture = TestBed.createComponent(EditInfoUeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
