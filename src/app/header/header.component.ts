import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe:EventEmitter<any> =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }
}
