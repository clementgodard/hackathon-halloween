import { Injectable } from '@angular/core';
import { Bonbon } from './bonbon';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  public map: google.maps.Map;

  constructor() { 
    this.map = null;
  }

  public initMap() {
    if (this.map === null) {
      if (navigator.geolocation) {
        // navigator.geolocation.getCurrentPosition(this.initPos);
        // navigator.geolocation.watchPosition(this.maPosition);
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            const mapProp = {
              center: coords,
              zoom: 18,
            };

            const map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
            this.map = map;

            this.initMarkers();
          }
        );
      } else {
        console.log('pas de GPS');
      }
    }
  }

  public addMarker(bonbon: Bonbon, p_position: google.maps.LatLng = null) {
    if (p_position === null) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

          const marker = new google.maps.Marker({
            position: coords,
            title: bonbon.getNom(),
            icon: '/assets/bonbon.png'
          });

          marker.setMap(this.map);
        }
      );
    } else {
      const coords = new google.maps.LatLng(p_position.lat(), p_position.lng());
      const marker = new google.maps.Marker({
        position: coords,
        title: bonbon.getNom(),
        icon: '/assets/bonbon.png'
      });

      marker.setMap(this.map);
    }
  }

  public initMarkers() {
    let coords = new google.maps.LatLng(48.47083, 1.014775);
    this.addMarker(new Bonbon('Caramel', ''), coords);

    coords = new google.maps.LatLng(48.470168, 1.015216);
    this.addMarker(new Bonbon('Nougat', ''), coords);

    coords = new google.maps.LatLng(48.473721, 1.012072);
    this.addMarker(new Bonbon('Crocodile', ''), coords);

    coords = new google.maps.LatLng(48.473845, 1.011074);
    this.addMarker(new Bonbon('Têtes brulée', ''), coords);

    coords = new google.maps.LatLng(48.471915, 1.011052);
    this.addMarker(new Bonbon('Petit Ourson', ''), coords);

    coords = new google.maps.LatLng(48.471223, 1.008011);
    this.addMarker(new Bonbon('Sucette', ''), coords);

    coords = new google.maps.LatLng(48.468754, 1.007817);
    this.addMarker(new Bonbon('Smarties', ''), coords);
  }
}
