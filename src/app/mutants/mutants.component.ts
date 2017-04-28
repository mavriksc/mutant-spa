import { Ability } from '../ability';
import { Mutant } from '../mutant';
import { MutantService } from '../mutant.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mutants',
  templateUrl: './mutants.component.html',
  styleUrls: ['./mutants.component.css']
})
export class MutantsComponent implements OnInit {
  mutants: Mutant[];
  newMutant: Mutant;
  

  getMutants(): void {
    this.mutantService.getMutants().then(mutants=> this.mutants = mutants);
  }

  add(): void {    
    this.newMutant.name = this.newMutant.name.trim();
    if (!this.newMutant.name) { return; }
    this.newMutant.abilities = this.newMutant.abilities.filter(ability => ability.description !=='');   
    this.mutantService.createMutant(this.newMutant).then(mutant => this.mutants.push(mutant));
    this.resetForm();      
  }
  deleteAbility(i: number): void{
      this.newMutant.abilities.splice(i,1);
  }
  addAbility(): void{
      this.newMutant.abilities.push(new Ability());
  }
  constructor(private router: Router, private mutantService: MutantService) { }
  resetForm(): void {
      this.newMutant = new Mutant();
      this.newMutant.name='';
      this.newMutant.abilities = [];
      this.newMutant.abilities.push(new Ability());
      this.newMutant.abilities.push(new Ability());
      this.newMutant.abilities.push(new Ability());
      
  }

  ngOnInit() {
    this.getMutants();
    this.resetForm();
  }

}
