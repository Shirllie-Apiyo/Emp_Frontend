import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpUpdateComponent } from './emp-update/emp-update.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'employees', component: EmpDetailsComponent },

  // below route should be given an id
  { path: 'employees/:id', component: ReadmoreComponent },
  { path: 'add', component: AddEmployeeComponent },
  { path: 'employeeupdate/:id', component: EmpUpdateComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'signin', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
