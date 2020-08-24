import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { setUser, loggedIn } from '../../actions/login.actions';
import { AuthService } from '../../../core/_services/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { setTitle } from '../../../core/actions/header.actions';
import { UserStore } from '../../../core/state/user.state';
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]), // itt ráköthetném a storera, hogy esetleges visszalépés esetén betöltse
    password: new FormControl(null, [Validators.required])
  })
  constructor(private store: Store, private auth: AuthService, private router: Router, private userStore: UserStore) {
    this.store.dispatch(new setTitle("Login"));
   }

  ngOnInit(): void {
  }

  login(){
    /*if(this.form.valid){

      this.auth.login({"email" : this.form.get("email").value, "password" : this.form.get("password").value}).subscribe((user: userModel)=>{ this.store.dispatch(new setUser(user))}, (error)=>{console.log("errorka")})
    }*/
    this.store.dispatch(new setUser({id:	"asdf1",
      isDeleted:	false,
      email:	"kurtossyo93@gmail.com",
      firstName:	"Kürtössy",
      lastName:	"Olivér",
      pictureUrl:	"https://upload.wikimedia.org/wikipedia/commons/7/71/2010-kodiak-bear-1.jpg"}))
    this.store.dispatch(new loggedIn());
    this.router.navigate(["profile"])
  }

}
