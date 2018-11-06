import { Component, OnInit } from '@angular/core';
import { CandyApiService } from '../candy-api.service';
import { MapService } from '../map.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bonbons',
  templateUrl: './bonbons.component.html',
  styleUrls: ['./bonbons.component.css']
})
export class BonbonsComponent implements OnInit {
  public service: CandyApiService;
  public mapService: MapService;
  public recherche: string;
  public viewAll: boolean;

  constructor(param: CandyApiService, param_map: MapService, param_router: Router) {
    this.service = param;
    this.recherche = '';
    this.mapService = param_map;
    this.viewAll = false;
  }

  ngOnInit() {
  }

  public toggleViewAll() {
    this.viewAll = !this.viewAll;
  }
}
