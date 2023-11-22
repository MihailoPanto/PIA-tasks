import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerStartComponent } from './worker-start.component';

describe('WorkerStartComponent', () => {
  let component: WorkerStartComponent;
  let fixture: ComponentFixture<WorkerStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerStartComponent]
    });
    fixture = TestBed.createComponent(WorkerStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
