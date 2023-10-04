import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferDataListsComponent } from './transfer-data-lists.component';

describe('TransferDataListsComponent', () => {
  let component: TransferDataListsComponent;
  let fixture: ComponentFixture<TransferDataListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TransferDataListsComponent]
    });
    fixture = TestBed.createComponent(TransferDataListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
