import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
// below needed to run forms
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EmpUpdateComponent } from './emp-update/emp-update.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

//UI modules
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    EmpDetailsComponent,
    ReadmoreComponent,
    AddEmployeeComponent,
    EmpUpdateComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatProgressBarModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
