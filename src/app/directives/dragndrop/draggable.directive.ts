import { Directive, EventEmitter, HostBinding, HostListener,Output } from '@angular/core';

@Directive({
  selector: '[appDraggable]',
})
export class DraggableDirective {

  @HostBinding('draggable') draggable = true;
  @HostBinding('class.draggable') draggableClass = true;
  @HostBinding('class.dragging') dragging = false;

  constructor(
  ) { }

  @HostListener('dragstart', ['$event']) onDragStart(event: DragEvent) {
    this.dragging = true;
    event.stopPropagation();
  }

  @HostListener('dragend', ['$event']) onDragEnd(event: DragEvent) {
    if (!this.dragging) return
    this.dragging = false;
  }

}
