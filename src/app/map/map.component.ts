import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.initPos);
      // navigator.geolocation.watchPosition(this.maPosition);
    } else {
      console.log('pas de GPS');
    }
  }

  ngOnInit() {
  }

  public initPos(position) {
    const mapProp = {
      center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      // center:new google.maps.LatLng(45, 0),
      zoom: 9,
    };

    const map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
  }

  public maPosition(position) {
    let infopos = 'Position déterminée :\n';
    infopos += 'Latitude : ' + position.coords.latitude + '\n';
    infopos += 'Longitude: ' + position.coords.longitude + '\n';
    infopos += 'Altitude : ' + position.coords.altitude + '\n';
    // infopos += "Vitesse  : "+position.coords.speed +"\n";
    document.getElementById('coord').innerHTML = infopos;

    // const mapProp = {
        // center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        // center:new google.maps.LatLng(45, 0),
        // zoom: 9,
    // };

    // const marker = new google.maps.Marker({position: myCenter});

    /*var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
    };*/

    // const map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
    // marker.setMap(map);
  }

}
