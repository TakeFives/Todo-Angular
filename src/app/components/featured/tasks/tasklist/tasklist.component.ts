import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/model/task';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit{

  @Input() boardId?: number
  @Input() index!: number;
  @Input() list!: {
    title: string,
    status: string,
    tasks: Task[]
  }
  @Input() outTask!: Task;
  @Input() outList!: Task[];

  @Output() currentTask = new EventEmitter<Task>()
  @Output() currentTaskEdit = new EventEmitter<Task>()
  @Output() currentList = new EventEmitter<Task[]>()
  @Output() currentEditList = new EventEmitter<Task[]>()

  bgColor?: string

  constructor(
    public taskService: TaskService,
    private store: Store
  ) { }

  ngOnInit() {
    let listsColors: string[] = []

    const valueFromLocalStorage = localStorage.getItem('color')
    if (valueFromLocalStorage) {
      listsColors = JSON.parse(valueFromLocalStorage)
    }

    if(this.list) {
      if (this.list.status === 'to do' && listsColors[0]) {
        this.bgColor = listsColors[0]
      }
      if (this.list.status === 'in progress' && listsColors[1]) {
        this.bgColor = listsColors[1]
      }
      if (this.list.status === 'done' && listsColors[2]) {
        this.bgColor = listsColors[2]
      }
    }

  }

  setColor(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.bgColor = target.value;
    console.log('this.list status', this.list.status)

    let listsColors: string[] = []

    const valueFromLocalStorage = localStorage.getItem('color')
    if (valueFromLocalStorage) {
      listsColors = JSON.parse(valueFromLocalStorage)
    }

    if (this.list.status === 'to do') {
      listsColors[0] = this.bgColor
    }
    if (this.list.status === 'in progress') {
      listsColors[1] = this.bgColor
    }
    if (this.list.status === 'done') {
      listsColors[2] = this.bgColor
    }

    localStorage.setItem('color', JSON.stringify(listsColors))
  }

  // drag and drop

  setCurrentTask(task: Task) {
    this.currentTask.emit(task)
  }
  setCurrentList(list: Task[]) {
    this.currentList.emit(list)
  }

  move(newStatus: string) {
    this.store.dispatch({ type: '[Task List Component] Drop Task', id: this.outTask.id, newStatus: newStatus })
  }

  // edit task

  setCurrentEditTask(task: Task) {
    this.currentTaskEdit.emit(task)
  }
  setCurrentTaskEditList(list: Task[]) {
    this.currentEditList.emit(list)
  }

}
