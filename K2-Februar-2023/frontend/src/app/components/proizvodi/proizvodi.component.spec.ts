import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProizvodiComponent } from './proizvodi.component';

describe('ProizvodiComponent', () => {
  let component: ProizvodiComponent;
  let fixture: ComponentFixture<ProizvodiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProizvodiComponent]
    });
    fixture = TestBed.createComponent(ProizvodiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
