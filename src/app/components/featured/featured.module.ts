import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardsModule } from "./boards/boards.module";

import { BoardsRoutingModule } from './boards/boards-routing.module';
import { TasksRoutingModule } from './tasks/tasks-routing.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [
  ], 
  imports: [
    CommonModule,
    BoardsRoutingModule,
    TasksRoutingModule,
    BoardsModule,
    TasksModule,
  ],
  exports: [
  ],

})
export class FeaturedModule { }
