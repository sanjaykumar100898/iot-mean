import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-Sensor-list',
  templateUrl: './Sensor-list.component.html',
  styleUrls: ['./Sensor-list.component.css']
})

export class SensorListComponent implements OnInit {

  Sensor: any = [];
  fault: any = [];

  constructor(private apiService: ApiService) {
    this.readSensor();
    this.faultSensors();

  }

  ngOnInit() {}

  readSensor() {
    this.apiService.getSensors().subscribe((data) => {
     this.Sensor = data;
    });
  }

 /* countSensors(){
    this.apiService.countSensors().subscribe((data) => {
      this.count = data;
      window.confirm(this.Sensor.length);
    });
  }*/

  countSensors() {
    if (window.confirm(this.Sensor.length)) {

        }

    }


  faultSensors() {
    this.apiService.faultSensors().subscribe((data) => {
     this.fault = data;
    });
  }

  removeSensor(Sensor, index) {
    if (window.confirm('are you sure')) {
        this.apiService.deleteSensor(Sensor._id).subscribe((data) => {
          this.Sensor.splice(index, 1);
        }
      );
    }
  }

}
