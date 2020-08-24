import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { RegisterScreenComponent } from './components/register-screen/register-screen.component';
import { ForgotPwScreenComponent } from './components/forgot-pw-screen/forgot-pw-screen.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginScreenComponent, RegisterScreenComponent, ForgotPwScreenComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
