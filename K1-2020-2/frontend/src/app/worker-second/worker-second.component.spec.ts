import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerSecondComponent } from './worker-second.component';

describe('WorkerSecondComponent', () => {
  let component: WorkerSecondComponent;
  let fixture: ComponentFixture<WorkerSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerSecondComponent]
    });
    fixture = TestBed.createComponent(WorkerSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
