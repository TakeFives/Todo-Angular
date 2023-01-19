import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Board } from 'src/app/model/board';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  @Input() board!: Board;

  visible = false;
  controls = false;

  @Input() mode!: string;
  @Output() modeChangeEvent = new EventEmitter<string>();
  @Output() getBoardEvent = new EventEmitter<Board>();

  constructor(
    public modalService: ModalService,
    private store: Store
  ) { }


  deleteBoard(event:Event, board: Board) {
    event.stopPropagation()
    this.store.dispatch({type: '[Board Component] Delete Board', board})
  }

  getBoard(board: Board) {
    this.getBoardEvent.emit(board)
  }

  changeMode(newMode: string) {
    this.modeChangeEvent.emit(newMode);
  }

  openTasksInfo(event: Event){
    event.stopImmediatePropagation(); 
    this.visible = !this.visible
  }

}
