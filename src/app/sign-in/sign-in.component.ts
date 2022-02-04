import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form: FormGroup

  constructor(
    private authService: AuthService,
    public fb: FormBuilder,
    private http: HttpClient, private router: Router) {
    this.form = this.fb.group({
      email: [''],
      password: [''],

      // todo client validation
    });
  }
  loginerror: any
  successmessage: any

  submitForm() {
    this.http.post<any>('http://127.0.0.1:5000/api/signin', {
      "email": this.form.get("email")!.value,
      "password": this.form.get("password")!.value

    }).subscribe({
      next: data => {
        // success
        // this.successmessage = "Logged in Successfully, Thank you"
        console.log("Name" + data.msg.name)
        console.log("Token" + data.token);
        //store above in local storage
        localStorage.setItem("access_token", data.token);
        localStorage.setItem("username", data.msg.name);
        localStorage.setItem("user_id", data.msg._id);

        this.router.navigate(['/dashboard']);

        this.loginerror = "";
      },
      error: errors => {
        //handle errors
        this.loginerror = errors.error.message;


      }
    })
  }//end submit

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/dashboard'])
    } else {
      this.router.navigate(['signin'])
    }

    // this.form = this.fb.group({
    //   email: ['', [Validators.required, Validators.email, Validators.maxLength(15)]],
    //   password: ['', [Validators.required, Validators.maxLength(13), Validators.pattern("[0-9A-Za-z]{13}")]]

    // })
  }
  // get registerFormControl() {
  //   return this.form.controls;
  // }

}
