import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropZone]'
})
export class DropZoneDirective {

  @HostBinding('class.dropzone-activated') activated = false;
  @HostBinding('class.dropzone-entered') entered = false;

  @HostListener('dragover', ['$event']) onDragOver(event:DragEvent) {
    event.preventDefault();
  }
  
}
