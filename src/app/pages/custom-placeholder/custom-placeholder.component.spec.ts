import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPlaceholderComponent } from './custom-placeholder.component';

describe('CustomPlaceholderComponent', () => {
  let component: CustomPlaceholderComponent;
  let fixture: ComponentFixture<CustomPlaceholderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomPlaceholderComponent]
    });
    fixture = TestBed.createComponent(CustomPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
