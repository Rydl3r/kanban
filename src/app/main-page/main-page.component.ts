import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  doing = ['Go home', 'Fall asleep'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addTodo(data: Todo): void {
    if (data.status === 'todo') {
      this.todo.unshift(data.description);
    } else if (data.status === 'doing') {
      this.doing.unshift(data.description);
    } else if (data.status === 'done') {
      this.done.unshift(data.description);
    }
  }
}
