import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SensorCreateComponent } from './components/Sensor-create/Sensor-create.component';
import { SensorListComponent } from './components/Sensor-list/Sensor-list.component';
import { SensorEditComponent } from './components/Sensor-edit/Sensor-edit.component';
import { TreeComponent } from './tree/tree.component';
import { DashComponent } from './dash/dash.component';
import { HeadComponent } from './head/head.component';

import { AngmapComponent } from './angmap/angmap.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-Sensor' },
  { path: 'create-Sensor', component: SensorCreateComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'dash', component: DashComponent },
  { path: 'head', component: HeadComponent },
  { path: 'map', component: AngmapComponent },
  { path: 'edit-Sensor/:id', component: SensorEditComponent },
  { path: 'Sensor-list', component: SensorListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
