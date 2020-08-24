import { loginCredentials } from "../../_stubs/loginCredentials";
import { userModel } from "../../_stubs/userModel";
/*
export class LoginUser{
    static readonly type = "[LOGIN] Login User";
    constructor(public loginCredentials: loginCredentials){
    }
}*/

export class setUser{
    static readonly type = "[USER] Set User";
    constructor(public userModel: userModel){ 
    }
}

export class loggedIn{
    static readonly type = "[USER] Logged In"
    constructor(){};
}

export class loggedOut{
    static readonly type = "[USER] Logged out";
    constructor(){};
}