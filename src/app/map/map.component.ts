import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import { Bonbon } from '../bonbon';
import { CandyApiService } from '../candy-api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public mapService: MapService;
  public recherche: string;
  public service: CandyApiService;

  constructor(param: MapService, candyService: CandyApiService) {
    this.mapService = param;
    this.recherche = '';
    this.service = candyService;
  }

  ngOnInit() {
    this.mapService.initMap();
  }

  public addBonbonToMarker(bonbon: Bonbon) {
    this.mapService.markers[this.mapService.markers.length - 1].setMap(null);
    this.mapService.addMarker(bonbon, this.mapService.markers[this.mapService.markers.length - 1].getPosition());
  }
}
