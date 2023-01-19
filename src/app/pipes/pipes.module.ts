import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBoardsPipe } from 'src/app/pipes/filter.pipe';
import { SortPipe } from 'src/app/pipes/sort.pipe';
import { TaskStatusPipe } from 'src/app/pipes/task-status.pipe';

@NgModule({
  declarations: [
    TaskStatusPipe,
    FilterBoardsPipe,
    SortPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TaskStatusPipe,
    FilterBoardsPipe,
    SortPipe,
  ]
})
export class PipesModule { }
