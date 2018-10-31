import { Component, OnInit } from '@angular/core';
import { CandyApiService } from '../candy-api.service';
import { Bonbon } from '../bonbon';
import { MapService } from '../map.service';

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

  constructor(param: CandyApiService, param_map: MapService) {
    this.service = param;
    this.recherche = '';
    this.mapService = param_map;
    this.viewAll = false;
  }

  ngOnInit() {
    /*
    this.service.getUrl('https://fr.openfoodfacts.org/cgi/search.pl?'
     + 'action=process&'
     + 'tagtype_0=categories&'
     + 'tag_contains_0=contains&'
     + 'tag_0=bonbon&'
     + 'tagtype_1=countries&'
     + 'tag_contains_1=contains&'
     + 'tag_1=France&'
     + 'sort_by=unique_scans_n&'
     + 'page_size=1000&json=1').subscribe(
    */

    // for (let i = 1 ; i <= 50 ; i++) {
    //   this.service.getUrl('https://fr.openfoodfacts.org/categorie/bonbons/' + i + '.json').subscribe
    //   (
    //     (param: any) => {
    //       for (const obj of param.products) {
    //         this.tableauBonbons.push(new Bonbon(obj.product_name, obj.image_url));
    //       }
    //     }
    //   );
    // }
  }

  public toggleViewAll() {
    this.viewAll = !this.viewAll;
  }
}
