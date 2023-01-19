import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LoginModule,
    RegisterModule,
    RouterModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
