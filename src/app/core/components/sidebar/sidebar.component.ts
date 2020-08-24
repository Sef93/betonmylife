import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
export let sidebarToggler = new Subject<null>();
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {
  isOpen:boolean = false;
  constructor() { 
    sidebarToggler.subscribe(()=>{
      this.isOpen = !this.isOpen;
    })
  }

  ngOnInit(): void {
  }

  closeSidebar(){
    sidebarToggler.next();
  }

}
