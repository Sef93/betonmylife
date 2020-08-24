import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { RegisterScreenComponent } from './components/register-screen/register-screen.component';
import { ForgotPwScreenComponent } from './components/forgot-pw-screen/forgot-pw-screen.component';

const routes: Routes = [
  {path: "", component: LoginScreenComponent},
  {path: "login", component: LoginScreenComponent},
  {path: "registration", component: RegisterScreenComponent},
  {path: "forgotten-password", component: ForgotPwScreenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
