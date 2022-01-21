import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];
  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];
  lineChartOptions = {
    responsive: true,
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: ChartType = "doughnut";  //can change to 'line'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let API_URL = `http://127.0.0.1:5000/api/countEmployees`
    this.http.get(API_URL)
      .subscribe((data) => this.displaydata(data));

    let API_URL2 = `http://127.0.0.1:5000/api/countDepartments`
    this.http.get(API_URL2)
      .subscribe((data) => this.displaydata2(data));
  }// end

  httpdata: any
  displaydata(data: any) {
    this.httpdata = data
    console.log(data);
  }//this data is exposed to html, httpdata.count

  httpdata2: any
  displaydata2(data: any) {
    this.httpdata2 = data
    console.log(data);
  }//this data is exposed to html, httpdata.count


}
