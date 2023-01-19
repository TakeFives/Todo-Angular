import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/components/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    RouterModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
