import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: any[], filterValue: string) {
    if (!filterValue.trim()) return arr.filter(value => value !== undefined && value !== null)
    
    return arr!.filter(item => {
      if (item.tasks) {
        return item.name.toLowerCase().includes(filterValue ? filterValue.toLowerCase() : '')
          ||
          item.tasks.some((task: { name: string; }) => task.name.toLowerCase().includes(filterValue ? filterValue.toLowerCase() : ''))
      } else {
        return item.name.toLowerCase().includes(filterValue ? filterValue.toLowerCase() : '')
      }

    })
  }
};
