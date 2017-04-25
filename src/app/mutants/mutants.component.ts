import { Ability } from '../ability';
import { Mutant } from '../mutant';
import { MutantService } from '../mutant.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mutants',
  templateUrl: './mutants.component.html',
  styleUrls: ['./mutants.component.css'],
  providers: [MutantService]
})
export class MutantsComponent implements OnInit {
  mutants: Mutant[];
  name = '';
  abilities: string[] = [];

  getMutants(): void {
    this.mutantService.getMutants().then(mutants=> this.mutants = mutants);
  }

  add(name: string, abilities: string[]): void {
    const m = new Mutant();
    name = name.trim();
    if (!name) { return; }
    abilities.forEach(item => {
      item = item.trim();
      if (item) {
        let a = new Ability();
        a.description = item;
        m.abilities.push(a);
      };
    });
    // TODO service call
  }

  constructor(private router: Router, private mutantService: MutantService) { }

  ngOnInit() {
    this.getMutants();
    this.abilities.push('');
    this.abilities.push('');
    this.abilities.push('');
  }

}
