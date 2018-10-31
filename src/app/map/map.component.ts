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

  constructor(param: MapService, candyService: CandyApiService) {
    this.mapService = param;
  }

  ngOnInit() {
    this.mapService.initMap();
  }
}
