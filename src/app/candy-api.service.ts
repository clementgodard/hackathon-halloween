import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandyApiService {
  public httpService: HttpClient;

  constructor(param_http: HttpClient) {
    this.httpService = param_http;
  }

  public getUrl(url: string): Observable<any> {
    return this.httpService.get(url);
  }
}
