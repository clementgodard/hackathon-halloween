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

  constructor(param_http: HttpClient) {
    this.httpService = param_http;
    this.tableauBonbons = [];

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
}
