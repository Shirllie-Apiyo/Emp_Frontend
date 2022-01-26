import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType, Chart } from 'chart.js';
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
  pieChartOptions = {
    responsive: true
  }
  pieChartLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
  pieChartColor: any = [
    {
      backgroundColor: ['rgba(30,169,224,0.8)',
        'rgba(225,165,0,0.9)',
        'rgba(139,136,136,0.9)',
        'rgba(225,161,181,0.9)',
        'rgba(225,102,0,0.9)'

      ]
    }
  ]
  pieChartType: ChartType = "pie";
  pieChartData: any = [
    {
      data: []
    }
  ];
  ngOnInit(): void {
    this.http.get('http://127.0.0.1:5000/api/pie', { responseType: 'json' }).subscribe(
      data => {
        this.pieChartData = data as any[];// fill the chart array with data
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );


    let API_URL = `http://127.0.0.1:5000/api/countEmployees`
    this.http.get(API_URL)
      .subscribe((data) => this.displaydata(data));

    let API_URL2 = `http://127.0.0.1:5000/api/countDepartments`
    this.http.get(API_URL2)
      .subscribe((data) => this.displaydata2(data));
  }// end

  onChartClick(event: any) {
    console.log(event);
  }



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
