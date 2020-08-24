import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { HeaderStore } from '../../state/header.state';
import { sidebarToggler } from "../sidebar/sidebar.component";
import { UserStore } from '../../state/user.state';
import { userModel } from '../../../_stubs/userModel';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { 
  }
  @Select(HeaderStore.IsLoggedIn) loggedIn: Observable<boolean>;
  @Select(HeaderStore.headerTitle) title: Observable<string>;
  @Select(UserStore.loggedUser) user: Observable<userModel>;
  ngOnInit(): void {
  }

  openMenu(){
    sidebarToggler.next();
  }


  public returnStyleObject(url:string):Object{
    return {"background" : `url(${url})`};
  }


}
