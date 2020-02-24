import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SensorCreateComponent } from './components/Sensor-create/Sensor-create.component';
import { SensorListComponent } from './components/Sensor-list/Sensor-list.component';
import { SensorEditComponent } from './components/Sensor-edit/Sensor-edit.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './service/api.service';
import { TreeComponent } from './tree/tree.component';
import { DashComponent } from './dash/dash.component';
import { HeadComponent } from './head/head.component';
import { AngmapComponent } from './angmap/angmap.component';
@NgModule({
  declarations: [
    AppComponent,
    SensorCreateComponent,
    SensorListComponent,
    SensorEditComponent,
    TreeComponent,
    DashComponent,
    HeadComponent,
    AngmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
