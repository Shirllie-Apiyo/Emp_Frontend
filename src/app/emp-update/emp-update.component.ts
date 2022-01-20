import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-emp-update',
  templateUrl: './emp-update.component.html',
  styleUrls: ['./emp-update.component.css']
})
export class EmpUpdateComponent implements OnInit {

  getId: any
  form:FormGroup
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient ,
    public fb :FormBuilder) {
    // get ID
    this.getId = this.activatedRoute.snapshot.paramMap.get("id")
    this.form = this.fb.group({
      department:['']
    });
  }

  ngOnInit(): void {
    // once you get id , use it to query our api
    let API_URL = `http://127.0.0.1:5000/api/employees/${this.getId}`
    console.log(this.getId);
    this.http.get(API_URL)
      .subscribe((data) => this.displaydata(data));

  }//end
  httpdata: any
  displaydata(data: any) {
    this.httpdata = data
    console.log(data);
  }//this data is exposed to html
  // we do update
  errormessage:any
  successmessage:any
  submitForm(){
    if (window.confirm("Are you sure you want to update")){
      let API_URL = `http://127.0.0.1:5000/api/employees/${this.getId}`
      this.http.put(API_URL,{"department":this.form.get("department") !.value})
      .subscribe(data =>{
        console.log("Updated Successfully")
        this.successmessage ="Updated Successfully"
      },
      (error =>{
        console.log(error.message)
        this.errormessage = "Update Failed"

      })// end subscribe
      )
    }// end if
  }// end submit



}// end code
