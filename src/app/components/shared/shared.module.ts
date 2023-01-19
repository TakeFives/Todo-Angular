import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { SortComponent } from './sort/sort.component';
import { TitleComponent } from './title/title.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FilterComponent,
    SortComponent,
    TitleComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FilterComponent, 
    SortComponent, 
    TitleComponent, 
    ModalComponent
  ]
})
export class SharedModule { }
