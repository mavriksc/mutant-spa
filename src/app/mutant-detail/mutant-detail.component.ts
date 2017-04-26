import { Ability } from '../ability';
import { Mutant } from '../mutant';
import { MutantService } from '../mutant.service';
import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-mutant-detail',
  templateUrl: './mutant-detail.component.html',
  styleUrls: ['./mutant-detail.component.css']
})
export class MutantDetailComponent implements OnInit {
  mutant: Mutant;
  abcd='abcd';  
  constructor(
    private mutantService: MutantService,
    private route: ActivatedRoute,
    private location: Location
    ) {}

  ngOnInit() {      
      this.route.params
      .switchMap((params: Params) => this.mutantService.getMutant(+params['id']))
      .subscribe(mutant => this.mutant = mutant);
  }

}
