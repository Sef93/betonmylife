import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { setTitle } from '../../../core/actions/header.actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../core/_services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pw-screen',
  templateUrl: './forgot-pw-screen.component.html',
  styleUrls: ['./forgot-pw-screen.component.scss']
})
export class ForgotPwScreenComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  })
  constructor(private store: Store, private authService: AuthService, private router: Router) {
    this.store.dispatch(new setTitle("Forgotten Password"))
  }

  changePassword(){
    if(this.form.valid){
      this.authService.changePassword(this.form.get("email").value).subscribe((ok)=>{
        this.router.navigate([""])
      })
    }
  }

  ngOnInit(): void {
  }

}
