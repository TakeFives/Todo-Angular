import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Board } from 'src/app/model/board';
import { Store } from '@ngrx/store';
import { delay, map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { SortPipe } from 'src/app/pipes/sort.pipe';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BoardsComponent implements OnInit {
  title = 'My Boards';
  sortSelect: string = 'name';
  sortOrder: string = 'asc';
  mode: string | undefined;
  board?: Board;
  boards$!: Observable<Board[]>;
  filteredBoards$!: Observable<Board[]>;

  constructor(
    public modalService: ModalService,
    private store: Store<{ boards: Board[] }>,
    private router: Router,
    private filterPipe: FilterPipe,
    private sortPipe: SortPipe
  ) { }

  ngOnInit() {
    this.boards$ = this.store.select('boards');
    this.filteredBoards$ = this.boards$
    .pipe(
      delay(100)
    );
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
    this.filteredBoards$ = this.store.select('boards')
    .pipe(
      map((boards) => {
          return this.filterPipe.transform(boards, value)
        })
      )
  }

  sortBoards() {
    this.filteredBoards$ = this.filteredBoards$
      .pipe(
        map(boards => {
          return this.sortPipe.transform(boards, [this.sortSelect, this.sortOrder])
        })
      )

  }

}
