import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-angmap',
  templateUrl: './angmap.component.html',
  styleUrls: ['./angmap.component.css']
})
export class AngmapComponent implements AfterViewInit {

  title = 'angular-gmap';
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 12.9891413;
  lng = 80.2295445;


  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
   center: this.coordinates,
   zoom: 8
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
    this.mapOptions);
    this.marker.setMap(this.map);
  }
 }
