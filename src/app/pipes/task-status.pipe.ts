import { Pipe, PipeTransform } from '@angular/core';
import { Task } from 'src/app/model/task';


@Pipe({
  name: 'taskStatus'
})
export class TaskStatusPipe implements PipeTransform {

  transform(tasks: Task[], status: string) {
    
    if (!status) return tasks;

    return tasks.filter(task => task.status === status)
  }

}
