import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from 'src/app/components/core/core.module';

import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from 'src/app/components/shared/shared.module';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    RouterModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
