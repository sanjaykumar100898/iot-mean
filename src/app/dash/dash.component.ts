import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  Sensor: any = [];
a = this.Sensor.length;



  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [this.a,this.a - 5, 180, 90];
  public doughnutChartType = 'doughnut';



  ngOnInit() {
  }

}

