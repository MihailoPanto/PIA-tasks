import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSecondComponent } from './customer-second.component';

describe('CustomerSecondComponent', () => {
  let component: CustomerSecondComponent;
  let fixture: ComponentFixture<CustomerSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerSecondComponent]
    });
    fixture = TestBed.createComponent(CustomerSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
