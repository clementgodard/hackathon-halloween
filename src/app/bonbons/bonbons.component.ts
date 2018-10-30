import { Component, OnInit } from '@angular/core';
import { CandyApiService } from '../candy-api.service';
import { Bonbon } from '../bonbon';

@Component({
  selector: 'app-bonbons',
  templateUrl: './bonbons.component.html',
  styleUrls: ['./bonbons.component.css']
})
export class BonbonsComponent implements OnInit {
  public service: CandyApiService;
  public tableauBonbons: Bonbon[];
  public recherche: string;
  public bonbonEnPoche: Bonbon[];

  constructor(param: CandyApiService) {
    this.service = param;
    this.tableauBonbons = [];
    this.recherche = '';
    this.bonbonEnPoche = [];
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
     + 'page_size=1000&json=1').subscribe(*/

      for (let i = 1 ; i <= 50 ; i++) {
        this.service.getUrl('https://fr.openfoodfacts.org/categorie/bonbons/' + i + '.json').subscribe
        (
          (param: any) => {
            for (let obj of param.products) {
              this.tableauBonbons.push(new Bonbon(obj.product_name, obj.image_url));
            }
          }
        );
      }
  }

  public afficheTableau() {
    console.log(this.tableauBonbons);
  }

  public addBonbon(bonbon: Bonbon) {
    this.bonbonEnPoche.push(bonbon);
  }

}
