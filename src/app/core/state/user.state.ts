import { Injectable } from "@angular/core";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import {  setUser } from "../../login/actions/login.actions";
import { loginCredentials } from "../../_stubs/loginCredentials";
import { AuthService } from "../_services/auth/auth.service";
import { of } from "rxjs";
import { userModel } from "../../_stubs/userModel";
import { Router } from "@angular/router";

interface LoggedUserState extends userModel{
    id:	string;
    isDeleted:	boolean;
    email:	string;
    firstName:	string;
    lastName:	string;
    pictureUrl:	string;
}
    
@State<userModel>({
    name: "LoggedUserState",
    defaults: {
        id:	null,
        isDeleted:	null,
        email:	null,
        firstName:	null,
        lastName:	null,
        pictureUrl:	null
    }
})
@Injectable()
export class UserStore{
    /*
        Ide jön a user
     */
    constructor(private authService: AuthService){}

    /*@Action(LoginUser)
    loginUser(credentials: loginCredentials){
        console.log("hey");
        return this.authService.login(credentials);
    }*/

    @Action(setUser)
    setUser({patchState}: StateContext<LoggedUserState>, user: setUser){
        patchState({id : user.userModel.id, isDeleted: user.userModel.isDeleted,email:  user.userModel.email,firstName:  user.userModel.firstName, lastName: user.userModel.lastName,pictureUrl: user.userModel.pictureUrl})
    }
    /*    setTitle({patchState} : StateContext<HeaderTitleState>, {title}: HeaderTitleState){
        patchState({title: title})
    }*/

    @Selector()
    static loggedUser(state: LoggedUserState): LoggedUserState{
        if(state.firstName == null || state.lastName == null){
            return null;
        }
        return state;
    }

}   