import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableDirective } from './draggable.directive';
import { DropZoneDirective } from './drop-zone.directive';

@NgModule({
  declarations: [
    DraggableDirective,
    DropZoneDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DraggableDirective, 
    DropZoneDirective,
  ],
})
export class DraggableModule { }
