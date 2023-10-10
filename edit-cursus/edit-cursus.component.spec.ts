import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCursusComponent } from './edit-cursus.component';

describe('EditCursusComponent', () => {
  let component: EditCursusComponent;
  let fixture: ComponentFixture<EditCursusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCursusComponent]
    });
    fixture = TestBed.createComponent(EditCursusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
