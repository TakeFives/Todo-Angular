import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DraggableModule } from 'src/app/directives/dragndrop/draggable.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { BoardsRoutingModule } from './boards-routing.module';

import { CreateBoardComponent } from './board/create-board/create-board.component';
import { EditBoardComponent } from './board/edit-board/edit-board.component';
import { BoardComponent } from './board/board/board.component';
import { BoardsComponent } from './boards.component';

@NgModule({
  declarations: [
    CreateBoardComponent,
    EditBoardComponent,
    BoardComponent,
    BoardsComponent,
  ],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    SharedModule,
    CoreModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DraggableModule,
    PipesModule
  ],
  exports: [
    CreateBoardComponent,
    EditBoardComponent,
    BoardComponent,
    BoardsComponent,
  ]
})
export class BoardsModule { }
