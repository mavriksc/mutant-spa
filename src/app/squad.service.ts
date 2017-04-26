import { Squad } from './squad';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SquadService {
  private squadURL = 'http://localhost:8080/api/squads';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }
  getSquads(): Promise<Squad[]> {
    return this.http.get(this.squadURL).toPromise().then(response => response.json().data as Squad[]).catch(this.handleError);
  }
  getSquad(id: number): Promise<Squad> {
    const url = '${this.squadURL}/${id}';
    return this.http.get(url).toPromise().then(response => response.json().data as Squad).catch(this.handleError);
  }
  createSquad(ids: number[]): Promise<Squad> {
    return this.http.post(this.squadURL,JSON.stringify({mutants: ids}),{headers: this.headers})
    .toPromise().then(response => response.json().data as Squad).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
