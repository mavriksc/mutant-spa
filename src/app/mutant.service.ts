import { Mutant } from './mutant';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MutantService {
  private mutantsUrl = 'http://localhost:8080/api/mutants';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getMutants(): Promise<Mutant[]> {
    return this.http.get(this.mutantsUrl)
      .toPromise()
      .then(response => response.json().data as Mutant[])
      .catch(this.handleError);
  }

  createMutant(m: Mutant): Promise<Mutant> {
    return this.http.post(this.mutantsUrl, JSON.stringify(m), {headers: this.headers})
      .toPromise()
      .then(response => response.json().data as Mutant)
      .catch(this.handleError);
  }
  getMutant(id: number): Promise<Mutant> {
    const url = `${this.mutantsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Mutant)
      .catch(this.handleError);
  }
  updatemutant(m: Mutant): Promise<Mutant> {
      const url = `${this.mutantsUrl}/${m.id}`;
      return this.http.put(url,JSON.stringify(m),{headers: this.headers})
      .toPromise()
      .then(response => response.json().data as Mutant)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
