import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorStartComponent } from './visitor-start.component';

describe('VisitorStartComponent', () => {
  let component: VisitorStartComponent;
  let fixture: ComponentFixture<VisitorStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorStartComponent]
    });
    fixture = TestBed.createComponent(VisitorStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
