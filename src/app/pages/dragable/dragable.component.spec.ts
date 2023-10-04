import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragableComponent } from './dragable.component';

describe('DragableComponent', () => {
  let component: DragableComponent;
  let fixture: ComponentFixture<DragableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DragableComponent]
    });
    fixture = TestBed.createComponent(DragableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
