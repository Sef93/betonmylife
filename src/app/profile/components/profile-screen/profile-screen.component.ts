import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { setTitle } from '../../../core/actions/header.actions';
import { UserStore } from '../../../core/state/user.state';
import { Observable } from 'rxjs';
import { userModel } from '../../../_stubs/userModel';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.component.html',
  styleUrls: ['./profile-screen.component.scss']
})
export class ProfileScreenComponent implements OnInit {
  isFormEditable: boolean = false;
  form: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email])
  })

  @Select(UserStore.loggedUser) user: Observable<userModel>
  
  constructor(private store: Store) {
    this.manageFormControlDisabled(false);
    this.user.subscribe((ok:userModel)=>{this.fillForm(ok)})
    this.store.dispatch(new setTitle("Profile"));
   }

  ngOnInit(): void {

  }

  private fillForm(userModel: userModel): void{
    this.form.setValue({
      firstName : userModel.firstName,
      lastName : userModel.lastName,
      email: userModel.email
    })
  }

  public edit(){
    
  }

  private manageFormControlDisabled(isDisabled:boolean = !this.isFormEditable){
    this.isFormEditable = isDisabled;
    if(this.isFormEditable){
      for(let control in this.form.controls){
        this.form.get(control).enable();
      }
    }else{
      for(let control in this.form.controls){
        this.form.get(control).disable();
      }
    }

  }

  public returnStyleObject(url:string):Object{
    return {"background" : `url(${url})`};
  }


}
