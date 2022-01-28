import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  form: FormGroup
  constructor(
    public fb: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      first_name: [''],
      last_name: [''],
      surname: [''],
      email: [''],
      id_number: [''],
      phone: [''],
      gender: [''],
      department: [''],
      qualification: [''],
      residence: [''],
      // todo client validation
    });
  }
  // create a functio{}
  firstnameerror: any
  lastnameerror: any
  surnameerror: any
  emailerror: any
  iderror: any
  phoneerror: any
  gendererror: any
  departmenterror: any
  qualificationerror: any
  residenceerror: any
  successmessage: any
  submitForm() {
    this.http.post<any>('http://127.0.0.1:5000/api/add', {
      "first_name": this.form.get("first_name")!.value,
      "last_name": this.form.get("last_name")!.value,
      "surname": this.form.get("surname")!.value,
      "phone": this.form.get("phone")!.value,
      "gender": this.form.get("gender")!.value,
      "residence": this.form.get("residence")!.value,
      "id_number": this.form.get("id_number")!.value,
      "department": this.form.get("department")!.value,
      "qualification": this.form.get("qualification")!.value,
      "email": this.form.get("email")!.value

    }).subscribe({
      next: data => {
        // success
        this.successmessage = "Employee Saved Successfully, Thank you"
      },
      error: errors => {
        //handle errors
        this.firstnameerror = errors.error.first_name;
        this.lastnameerror = errors.error.last_name;
        this.surnameerror = errors.error.surname;
        this.emailerror = errors.error.email;
        this.iderror = errors.error.id_number;
        this.phoneerror = errors.error.phone;
        this.gendererror = errors.error.gender;
        this.departmenterror = errors.error.department;
        this.qualificationerror = errors.error.qualification;
        this.residenceerror = errors.error.residence;
      }
    })
  }//end submit
  ngOnInit(): void {
    // angular validators
    this.form = this.fb.group({
      first_name: ['', [Validators.required, Validators.maxLength(10)]],
      last_name: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(15)]],
      phone: ['', [Validators.required, Validators.maxLength(13), Validators.pattern("[0-9A-Za-z]{13}")]]

    })

  }//end nginit
  //[0-9 A-Z]{13}
  // all validators are loaded here below 
  get registerFormControl() {
    return this.form.controls;
  }

}
// frontend - backend
// contact us form, names, phone,message