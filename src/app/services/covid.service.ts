import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  private baseUrl: string = environment.baseUrl;

  constructor(public httpClient: HttpClient) {
  }

  public getNbrVacc() {
    return this.httpClient.get(this.baseUrl + '/vaccin');
  }

  public getVaccinFirstYear() {
    return this.httpClient.get(this.baseUrl + '/country');
  }
  public getVaccinFirstDay() {
    return this.httpClient.get(this.baseUrl + '/country');
  }
}
