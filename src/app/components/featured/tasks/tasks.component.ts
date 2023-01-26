import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Board } from 'src/app/model/board';
import { Task } from 'src/app/model/task';
import { BoardService } from 'src/app/services/board.service';
import { ModalService } from 'src/app/services/modal.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit, OnDestroy {

  subscription!: Subscription

  boardId?: number;
  board!: Board;
  board$: Observable<Board | undefined> = this.store.select(state => state.boards.find(board => board.id === this.boardId));

  task!: Task;
  list!: [];

  loading = false;

  taskLists = [
    {
      title: 'todo',
      status: 'to do',
      tasks: []! as Task[]
    },
    {
      title: 'in progress',
      status: 'in progress',
      tasks: []! as Task[]
    },
    {
      title: 'done',
      status: 'done',
      tasks: []! as Task[]
    }
  ]

  filteredLists!: any[];

  outTask!: Task;
  outList!: Task[];
  outTaskEdit!: Task
  outEditList!: Task[]

  filterValue?: string;
  sortSelect: string = 'name';
  sortOrder: string = 'asc'

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService,
    public taskService: TaskService,
    public modalService: ModalService,
    private router: Router,
    private store: Store<{ boards: Board[] }>
  ) {
  }

  ngOnInit(): void {

    this.route.params.subscribe((params => {
      this.boardId = +params['id']
    }))

    this.subscription = this.board$
      .subscribe((board) => {
        if (board) {
          this.board = board

          if (this.board.tasks) {
            this.taskLists[0].tasks = this.board.tasks.filter(task => task.status === 'to do');
            this.taskLists[1].tasks = this.board.tasks.filter(task => task.status === 'in progress');
            this.taskLists[2].tasks = this.board.tasks.filter(task => task.status === 'done');
          }
          this.loading = false
        }
      })

      this.filteredLists = [...this.taskLists]
  }


  deleteBoard(board: Board) {
    this.router.navigate([''])
    this.store.dispatch({ type: '[Board Component] Delete Board', board })
  }

  // drag and drop

  setOutTask(event: any) {
    this.outTask = event
  }
  setOutList(event: any) {
    this.outList = event
  }

  // sort and filter 

  filterLists(value: string) {
    
    this.filteredLists = this.taskLists
      .filter(list => {
        if (!value?.trim()) return list

        if (list.tasks) {
          return list.title.toLowerCase().includes(value ? value.toLowerCase() : '')
          ||
          list.tasks.some((task: { name: string; }) => task.name.toLowerCase().includes(value ? value.toLowerCase() : ''))
        } else {
          return list.title.toLowerCase().includes(value ? value.toLowerCase() : '')
        }
      })

  }

  onSelectedValue(value: string) {
    this.sortSelect = value
    this.sortLists();
  }

  onSortOrder(value: string) {
    this.sortOrder = value
    this.sortLists();
  }

  sortLists() {
    const sortedList = [...this.taskLists]

    let mult = 1
    if (this.sortOrder === 'desc') {
      mult = -1
    }
    if (this.sortSelect === 'tasks') {
      sortedList.sort((a: any, b: any) => {
        if (a[this.sortSelect].length < b[this.sortSelect].length) {
          return -1 * mult;
        } else if (a[this.sortSelect].length > b[this.sortSelect].length) {
          return 1 * mult;
        } else {
          return 0;
        }
      })
    }
    sortedList
      .map((list) => {
        list.tasks.sort((a: any, b: any) => {
          if (a[this.sortSelect] < b[this.sortSelect]) {
            return -1 * mult;
          } else if (a[this.sortSelect] > b[this.sortSelect]) {
            return 1 * mult;
          } else {
            return 0;
          }
        })
      })

    this.taskLists = [...sortedList]
  }

  // edit task

  setOutTaskEdit(task: Task) {
    this.outTaskEdit = task
  }
  setOutEditList(list: Task[]) {
    this.outEditList = list
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
