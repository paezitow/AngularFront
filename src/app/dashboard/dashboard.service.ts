import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Stock } from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root',

})
export class DashboardService {

  readonly url = 'https://apistockssqw.herokuapp.com/bootcamp/'

  constructor(private http: HttpClientModule, private _http: HttpClient) { }

  async getStock(): Promise<Stock[]>{
    return this._http.get<Stock[]>(`${this.url}/stock`).toPromise();
  }

}
