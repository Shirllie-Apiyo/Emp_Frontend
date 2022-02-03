import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth';
@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  constructor(
    private http: HttpClient, private authService: AuthService, private router: Router
  ) { }

  ngOnInit(): void {

    if (!this.authService.isLoggedIn) {
      this.router.navigate(['signin'])
    }
    else {
      this.http.get("http://127.0.0.1:5000/api/employees")
        .subscribe((data) => this.displaydata(data))
    }
  }//end
  // we need to expose the data to html
  httpdata: any
  displaydata(data: any) {
    this.httpdata = data
    console.log(data)
  }
  //now httpdata is accessible to html component
  //delete record
  delete(id: any) {
    console.log(id);
    if (window.confirm('Are you sure you want to go ahead')) {
      let API_URL = `http://127.0.0.1:5000/api/employees/${id}`
      this.http.delete(API_URL)
        .subscribe((data) => {
          window.location.reload();
        })
    }
  }
}
