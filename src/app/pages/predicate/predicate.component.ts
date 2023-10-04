import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-predicate',
  standalone: true,
  imports: [CdkDropList, NgFor, CdkDrag],
  templateUrl: './predicate.component.html',
  styleUrls: ['./predicate.component.scss']
})
export class PredicateComponent {
  // all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // even = [10];
  all = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  even = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];


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
  }

  /** Predicate function that only allows even numbers to be dropped into a list. */
  evenPredicate(item: CdkDrag<string>) {
    // return item.data % 2 === 0;
    return item.data === 'Get to work';
  }

  noReturnPredicate() {
    return false;
  }
}
