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
  name = '';
  abilities: Ability[] = [];

  getMutants(): void {
    this.mutantService.getMutants().then(mutants=> this.mutants = mutants);
  }

  add(): void {    
    this.name = this.name.trim();
    if (!this.name) { return; }
    const m = new Mutant();
    m.abilities = [];
    m.name = this.name;
    this.abilities.forEach(item => {
        if(item.description !=''){
                m.abilities.push(item);
            }
    });
   
    this.mutantService.createMutant(m).then(mutant => this.mutants.push(mutant));
    // clear form
    this.name='';
    this.abilities = [];
    this.abilities.push(new Ability(''));
    this.abilities.push(new Ability(''));
    this.abilities.push(new Ability(''));
      
  }
  deleteAbility(i: number): void{
      this.abilities.splice(i,1);
  }
  addAbility(): void{
      this.abilities.push(new Ability(''));
  }
  get diagnostic() { return JSON.stringify({name: this.name,abilities: this.abilities}); }

  constructor(private router: Router, private mutantService: MutantService) { }

  ngOnInit() {
    this.getMutants();
    this.abilities.push(new Ability(''));
    this.abilities.push(new Ability(''));
    this.abilities.push(new Ability(''));
  }

}
