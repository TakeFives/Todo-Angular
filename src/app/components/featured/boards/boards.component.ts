import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Board } from 'src/app/model/board';
import { State, Store } from '@ngrx/store';
import { delay, filter, map, Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BoardsComponent implements OnInit {

  title = 'Dashboard';

  mode: string | undefined;

  sortSelect: string = 'name';
  sortOrder: string = 'asc';

  board?: Board;
  boards$!: Observable<Board[]>;
  filteredBoards$!: Observable<Board[]>;

  constructor(
    public modalService: ModalService,
    private store: Store<{ boards: Board[] }>,
    private router: Router
  ) { }

  ngOnInit() {
    this.boards$ = this.store.select('boards');
    this.filteredBoards$ = this.boards$;
  }

  changeMode(mode: string) {
    this.mode = mode
  }

  getBoard(board: Board) {
    this.board = board
  }

  goToBoard(id: number) {
    this.router.navigate(['/board', id])
  }

  onSelectedValue(value: string) {
    this.sortSelect = value;
    this.sortBoards()
  }

  onSortOrder(value: string) {
    this.sortOrder = value;
    this.sortBoards()
  }

  filterBoards(value: string) {
    this.filteredBoards$ = this.boards$.pipe(
      map((boards) => {
        if (!value.trim()) return boards!

        return boards!.filter(item => {
          if (item.tasks) {
            return item.name.toLowerCase().includes(value ? value.toLowerCase() : '')
              ||
              item.tasks.some((task: { name: string; }) => task.name.toLowerCase().includes(value ? value.toLowerCase() : ''))
          } else {
            return item.name.toLowerCase().includes(value ? value.toLowerCase() : '')
          }
        }
        )
      })
    )
  }

  sortBoards() {
    this.filteredBoards$ = this.filteredBoards$
      .pipe(
        map(boards => {
          const sortBoards = [...boards]

          let mult = 1
          if (this.sortOrder === 'desc') {
            mult = -1
          }

          return sortBoards.sort((a: any, b: any) => {
            if (a[this.sortSelect] < b[this.sortSelect]) {
              return -1 * mult;
            } else if (a[this.sortSelect] > b[this.sortSelect]) {
              return 1 * mult;
            } else {
              return 0;
            }
          })
        })
      )

  }

}
