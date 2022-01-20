import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee';
  sideBarOpen =true
// this function set sideBarOpen true/false
  sidebarToggler(){
    this.sideBarOpen = !this.sideBarOpen
  }
}
