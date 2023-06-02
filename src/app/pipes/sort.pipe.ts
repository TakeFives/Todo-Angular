import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  
  transform(arrToSort: any, args: [sortBy: string, sortValue: string]): any {

    if (!arrToSort) return
    if (!args) return arrToSort

    const arrForSort = [...arrToSort]

    const sortKey = args[0];
    const sortDirection = args[1];

    if(!sortKey) return arrForSort
    if(!sortDirection) return arrForSort
    
    let mult = 1
    if(sortDirection === 'desc'){
      mult = -1
    }
    
    arrForSort.sort((a:any, b:any)=> {
      if(a[sortKey] < b[sortKey]){
        return -1 * mult;
      } else if( a[sortKey] > b[sortKey]){
        return 1 * mult;
      } else{
        return 0;
      }
    })

    return arrForSort
  }
 
}
