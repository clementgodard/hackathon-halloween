import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bonbon } from './bonbon';

@Injectable({
  providedIn: 'root'
})
export class CandyApiService {
  public httpService: HttpClient;
  public tableauBonbons: Bonbon[];
  public bonbonEnPoche: Bonbon[];

  constructor(param_http: HttpClient) {
    this.httpService = param_http;
    this.tableauBonbons = [];
    this.bonbonEnPoche = [];

    for (let i = 1 ; i <= 50 ; i++) {
      this.getUrl('https://fr.openfoodfacts.org/categorie/bonbons/' + i + '.json').subscribe
      (
        (param: any) => {
          for (const obj of param.products) {
            this.tableauBonbons.push(new Bonbon(obj.product_name, obj.image_url));
          }
        }
      );
    }
  }

  public getUrl(url: string): Observable<any> {
    return this.httpService.get(url);
  }

  public enlever(bonbon: Bonbon) {
    const index = this.bonbonEnPoche.indexOf(bonbon);
    this.bonbonEnPoche.splice(index, 1);
    bonbon.resetNombre();
  }

  public addBonbon(bonbon: Bonbon) {
    if (this.bonbonEnPoche.indexOf(bonbon) === -1) {
      this.bonbonEnPoche.push(bonbon);
    } else {
      bonbon.nombrePlus();
    }
  }
}
