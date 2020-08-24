import { Injectable } from "@angular/core";
import { State, Action, Select, StateContext, Selector } from "@ngxs/store";
import { userModel } from "../../_stubs/userModel";
import { setTitle } from "../actions/header.actions";
import { patch } from '@ngxs/store/operators';
import { loggedIn, loggedOut } from "../../login/actions/login.actions";
interface HeaderTitleState{
    title: string;

}
interface LoggedInState{
    loggedIn: boolean;
}

@State<HeaderTitleState>({
    name: "headerTitle",
    defaults: {
        title: null,
    }
})
@State<LoggedInState>({
    name: "loggedInState",
    defaults:{
        loggedIn: false
    }
})
@Injectable()
export class HeaderStore{
    constructor(){}

    @Action(setTitle)
    setTitle({patchState} : StateContext<HeaderTitleState>, {title}: HeaderTitleState){
        patchState({title: title})
    }

    @Selector()
    static headerTitle(state: HeaderTitleState): string{
        if(state.title == null){
            return "Loading...";
        }
        return state.title;
    }

    @Action(loggedIn)
    setLoggedIn({patchState} : StateContext<LoggedInState>){
        patchState({loggedIn : true});
    }

    @Action(loggedOut)
    setLoggedOut({patchState} : StateContext<LoggedInState>){
        patchState({loggedIn: false});
    }

    @Selector()
    static IsLoggedIn(state: LoggedInState): boolean{
        return state.loggedIn;
    }

}   