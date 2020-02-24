import { Sensor } from '../../model/Sensor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-Sensor-edit',
  templateUrl: './Sensor-edit.component.html',
  styleUrls: ['./Sensor-edit.component.css']
})

export class SensorEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  SensorData: Sensor[];
  SensorProfile: any = ['cfs', 'kelvin', 'Pa', 'Degree-Celsius'];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateSensor();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getSensor(id);
    this.editForm = this.fb.group({
      Sensor_name: ['', [Validators.required]],
      Sensor_id: ['', [Validators.required]],
      Sensor_unit: ['', [Validators.required]],
      Sensor_value: ['', [Validators.required]],
    });
  }

  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('designation').setValue(e, {
      onlySelf: true
    });
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getSensor(id) {
    this.apiService.getSensor(id).subscribe(data => {
      this.editForm.setValue({
        Sensor_name: data['Sensor_name'],
        Sensor_id: data['Sensor_id'],
        Sensor_unit: data['Sensor_unit'],
        Sensor_value: data['Sensor_value'],
      });
    });
  }

  updateSensor() {
    this.editForm = this.fb.group({
      Sensor_name: ['', [Validators.required]],
      Sensor_id: ['', [Validators.required]],
      Sensor_unit: ['', [Validators.required]],
      Sensor_value: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateSensor(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/Sensors-list');
            console.log('Content updated successfully!');
          }, (error) => {
            console.log(error);
          });
      }
    }
  }

}
