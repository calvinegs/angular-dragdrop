import { Component } from '@angular/core';
import { CdkDragDrop, CdkDropList, CdkDrag, CdkDragPlaceholder, moveItemInArray } from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-reordering-list',
  standalone: true,
  imports: [CdkDropList, NgFor, CdkDrag],
  templateUrl: './reordering-list.component.html',
  styleUrls: ['./reordering-list.component.scss']
})
export class ReorderingListComponent {
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
