import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AukcijaComponent } from './aukcija.component';

describe('AukcijaComponent', () => {
  let component: AukcijaComponent;
  let fixture: ComponentFixture<AukcijaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AukcijaComponent]
    });
    fixture = TestBed.createComponent(AukcijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
