import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ErrorComponent } from './error/error.component';
import { UserNavComponent } from './user-nav/user-nav.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    ErrorComponent,
    UserNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, NavComponent ]
})
export class CoreModule { }
