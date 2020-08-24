import { Injectable } from '@angular/core';
import { HttpMiddlewareService } from '../http-middleware.service';
import { Globals } from '../globals.service';
import { loginCredentials } from "../../../_stubs/loginCredentials"
import { createCredentials } from '../../../_stubs/createCredentials';
import { Subscription, Observable } from 'rxjs';
import { userModel } from '../../../_stubs/userModel';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endPoint = "/auth/";
  constructor(private http: HttpMiddlewareService, private globals: Globals) {}

  public login(userCredentials: loginCredentials){
    return this.http.post(this.globals.baseURL + this.endPoint + "login", userCredentials) as Observable<userModel>
  }

  public register(userCredentials: createCredentials){
    return this.http.post(this.globals.baseURL + this.endPoint + "/register", userCredentials);
  }

  public changePassword(email: string){
    return this.http.patch(this.globals.baseURL + this.endPoint + "/itthianyzikegyvegpontiguess", email);
  }
}
