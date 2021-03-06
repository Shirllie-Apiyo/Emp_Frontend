import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  isLogged(): Boolean {
    return this.authService.isLoggedIn
  }

}
