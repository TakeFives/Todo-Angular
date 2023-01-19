import { Component, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Output() filterTermEvent = new EventEmitter<string>();

  getFilterValue(event:any){
    this.filterTermEvent.emit(event.target.value)
  }
 
}
