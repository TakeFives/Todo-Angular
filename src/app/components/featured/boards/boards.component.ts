import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Board } from 'src/app/model/board';
import { Store } from '@ngrx/store';
import { delay, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BoardsComponent {

  title = 'Dashboard';

  mode: string | undefined;

  board?: Board;
  boards$: Observable<Board[]> = this.store.select(state => state.boards);

  filterValue?: string;
  sortSelect: string = 'name';
  sortOrder: string = 'asc'

  constructor(
    public modalService: ModalService,
    private store: Store<{ boards: Board[] }>,
    private router: Router
  ) { }

  changeMode(mode: string) {
    this.mode = mode
  }

  getBoard(board: Board) {
    this.board = board
  }

  goToBoard(id:number){
    this.router.navigate(['/board', id])
  }

  getFilterValue(value:string){
    this.filterValue = value
  }
  
  onSelectedValue(value:string){
    this.sortSelect = value
  }

  onSortOrder(value:string){
    this.sortOrder = value
  }

}
