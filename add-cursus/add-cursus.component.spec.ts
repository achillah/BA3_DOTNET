import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCursusComponent } from './add-cursus.component';

describe('AddCursusComponent', () => {
  let component: AddCursusComponent;
  let fixture: ComponentFixture<AddCursusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCursusComponent]
    });
    fixture = TestBed.createComponent(AddCursusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
