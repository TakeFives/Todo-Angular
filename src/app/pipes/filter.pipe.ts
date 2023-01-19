import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterBoardsPipe implements PipeTransform {

  transform(arr: any[] | null, filterValue?: string): any[] {

    if (!filterValue?.trim()) return arr!

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

}
