import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUeComponent } from './info-ue.component';

describe('InfoUeComponent', () => {
  let component: InfoUeComponent;
  let fixture: ComponentFixture<InfoUeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoUeComponent]
    });
    fixture = TestBed.createComponent(InfoUeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
