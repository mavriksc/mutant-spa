import { Mutant } from './mutant';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MutantSearchService {
    

  constructor(private http:Http) { }
  search(token: string): Observable<Mutant[]> {
      return this.http.get(`http://localhost/heroes/data/search?name=${token}`)
      .map(response => response.json().data as Mutant[]);
      
  }

}
