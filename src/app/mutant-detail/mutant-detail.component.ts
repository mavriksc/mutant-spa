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
  
  deleteAbility(i: number): void{
      this.mutant.abilities.splice(i,1);
  }
  addAbility(): void{
      this.mutant.abilities.push(new Ability(''));
  }
  constructor(
    private mutantService: MutantService,
    private route: ActivatedRoute,
    private location: Location
    ) {}
  save(): void{
      this.mutantService.updatemutant(this.mutant).then(()=> this.goBack());
  }
  goBack(): void {
      this.location.back();
    }

  ngOnInit() {      
      this.route.params
      .switchMap((params: Params) => this.mutantService.getMutant(+params['id']))
      .subscribe(mutant => this.mutant = mutant);
  }

}
