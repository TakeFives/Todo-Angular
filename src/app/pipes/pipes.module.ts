import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { SortPipe } from 'src/app/pipes/sort.pipe';
import { TaskStatusPipe } from 'src/app/pipes/task-status.pipe';

@NgModule({
  declarations: [
    TaskStatusPipe,
    FilterPipe,
    SortPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TaskStatusPipe,
    FilterPipe,
    SortPipe,
  ]
})
export class PipesModule { }
