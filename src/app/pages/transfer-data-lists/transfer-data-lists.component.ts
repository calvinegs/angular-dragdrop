import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
  copyArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-transfer-data-lists',
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, NgFor, CdkDrag],
  templateUrl: './transfer-data-lists.component.html',
  styleUrls: ['./transfer-data-lists.component.scss']
})
export class TransferDataListsComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    // if (event.previousContainer === event.container) {
    //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    // } else {
    //     let idx=event.container.data.indexOf(event.previousContainer.data[event.previousIndex]);
    //     if(idx != -1){
    //       return;
    //   }
    //     copyArrayItem(event.previousContainer.data,
    //                     event.container.data,
    //                     event.previousIndex,
    //                     event.currentIndex);
    // }
  }

  /** Predicate function that only allows even numbers to be dropped into a list. */
  conditionPredicate(item: CdkDrag<string>) {
    return item.data  === 'Get to work';
  }
}
