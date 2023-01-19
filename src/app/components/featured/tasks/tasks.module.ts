import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DraggableModule } from 'src/app/directives/dragndrop/draggable.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { TasksRoutingModule } from './tasks-routing.module';
import { CommentsModule } from './task/comments/comments.module';

import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task/task.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { EditTaskComponent } from './task/edit-task/edit-task.component';


@NgModule({
  declarations: [
    TasksComponent,
    TaskComponent,
    CreateTaskComponent,
    TasklistComponent,
    EditTaskComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    CoreModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DraggableModule,
    PipesModule,
    CommentsModule
  ],
  exports: [
    TasksComponent,
    TaskComponent,
    CreateTaskComponent,
    TasklistComponent,
    EditTaskComponent,
  ]
})
export class TasksModule { }
