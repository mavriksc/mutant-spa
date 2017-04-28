import { Disaster } from './disaster';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DisasterService {
  private disasterUrl = 'http://localhost:8080/api/disasters';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getDisasters(): Promise<Disaster[]> {
    return this.http.get(this.disasterUrl).toPromise().then(response => response.json().data as Disaster[]).catch();
  }
  getDisaster(id: number): Promise<Disaster> {
    const url = `${this.disasterUrl}/${id}`;
    return this.http.get(url).toPromise().then(response => response.json().data as Disaster).catch();
  }
  createDisaster(d: Disaster): Promise<Disaster> {
    return this.http.post(this.disasterUrl, JSON.stringify(d), {headers: this.headers})
      .toPromise().then(response => response.json().data as Disaster).catch();
  }
  updateDisaster(id: number, d: Disaster): Promise<Disaster> {
    const url = `${this.disasterUrl}/${id}`;
    return this.http.put(url, JSON.stringify(d), {headers: this.headers})
      .toPromise().then(response => response.json().data as Disaster).catch();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
