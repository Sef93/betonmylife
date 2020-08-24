import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { setTitle } from '../../../core/actions/header.actions';
import { AuthService } from '../../../core/_services/auth/auth.service';
import { createCredentials } from '../../../_stubs/createCredentials'
import { userModel } from '../../../_stubs/userModel';
import { setUser } from '../../actions/login.actions';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterScreenComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    pictureUrl: new FormControl(null, Validators.required),
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    passwordAgain: new FormControl(null, Validators.required)
  }, this.checkPassword)
  constructor(private store: Store, private authService: AuthService, private router: Router) {
    this.store.dispatch(new setTitle("Registration"))
   }

  ngOnInit(): void {
  }

  register(){
    if(this.form.valid){
      let credentials = new Object() as createCredentials;
      for(let key in this.form.controls){
        credentials[key] = this.form.get(key).value;
      }
      this.authService.register(credentials).subscribe((ok: userModel)=>{
        this.store.dispatch(new setUser(ok))
        this.router.navigate(["profile"])
        }
      )
    }
  }

  checkPassword(group: FormGroup){
    let pw: string = group.get("password").value;
    let pwAgain: string = group.get("passwordAgain").value;
    return pw === pwAgain ? null : { differentPw: true }
  }

}
