import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {

  @Output() selectedItemEvent = new EventEmitter<string>()
  @Output() descEvent = new EventEmitter<string>()
  @Output() ascEvent = new EventEmitter<string>()

  onSelected(event:any){
    this.selectedItemEvent.emit(event.target.value)
  }

  onDesc(event:any){
    this.descEvent.emit(event.target.value)
  }

  onAsc(event:any){
    this.ascEvent.emit(event.target.value)
  }
}
