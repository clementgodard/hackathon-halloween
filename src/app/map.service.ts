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

          // tslint:disable-next-line:max-line-length
          const contentString = '<h2>' + bonbon.getNom() + '</h2><img src='
                                 + bonbon.getImg() + ' alt=bonbon />';

          const infowindow = new google.maps.InfoWindow({
            content: contentString
          });

          marker.addListener('click', () => {
            infowindow.open(this.map, marker);
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

      // tslint:disable-next-line:max-line-length
      const contentString = '<h2>' + bonbon.getNom() + '</h2><img src='
      + bonbon.getImg() + ' alt=bonbon />';

      const infowindow = new google.maps.InfoWindow({
          content: contentString
      });

      marker.addListener('click', () => {
        infowindow.open(this.map, marker);
      });

      marker.setMap(this.map);
    }
  }

  public initMarkers() {
    let coords = new google.maps.LatLng(48.47083, 1.014775);
    this.addMarker(new Bonbon('Werther\'s Original Caramelts', 'https://static.openfoodfacts.org/images/products/29037209/front_fr.10.400.jpg'), coords);

    coords = new google.maps.LatLng(48.470168, 1.015216);
    this.addMarker(new Bonbon('Mi-cho-ko', 'https://static.openfoodfacts.org/images/products/353/828/005/2176/front_fr.17.400.jpg'), coords);

    coords = new google.maps.LatLng(48.473721, 1.012072);
    this.addMarker(new Bonbon('Crocodile', 'https://static.openfoodfacts.org/images/products/310/322/000/9130/front_fr.17.400.jpg'), coords);

    coords = new google.maps.LatLng(48.473845, 1.011074);
    this.addMarker(new Bonbon('Têtes brulée', 'https://static.openfoodfacts.org/images/products/350/127/111/1015/front_fr.17.400.jpg'), coords);

    coords = new google.maps.LatLng(48.471915, 1.011052);
    this.addMarker(new Bonbon('Petit Ourson', 'https://static.openfoodfacts.org/images/products/317/328/920/4708/front_fr.10.400.jpg'), coords);

    coords = new google.maps.LatLng(48.471223, 1.008011);
    this.addMarker(new Bonbon('Sucette', 'https://static.openfoodfacts.org/images/products/49814521/front_fr.13.400.jpg'), coords);

    coords = new google.maps.LatLng(48.468754, 1.007817);
    this.addMarker(new Bonbon('Smarties', 'https://static.openfoodfacts.org/images/products/40056470/front_fr.17.400.jpg'), coords);
  }
}
