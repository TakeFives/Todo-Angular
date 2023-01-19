import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { GuideComponent } from './guide.component';
import { GuideRoutingModule } from './guide-routing.module';


@NgModule({
  declarations: [
    GuideComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CoreModule,
    GuideRoutingModule
  ],
  exports: [
    GuideComponent
  ]
})
export class GuideModule { }
