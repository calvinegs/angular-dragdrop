import { Component } from '@angular/core';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dragable',
  standalone: true,
  imports: [CdkDrag,CdkDragHandle],
  templateUrl: './dragable.component.html',
  styleUrls: ['./dragable.component.scss']
})
export class DragableComponent {

}
