import { Component, OnInit, EventEmitter,  Output } from '@angular/core';
import { MutantSearchService } from '../mutant-search.service';
import { MutantService } from '../mutant.service';
import { SquadService } from '../squad.service';
import { Mutant } from '../mutant';
import { Squad } from '../squad';

@Component({
  selector: 'assign-squad',
  templateUrl: './assign-squad.component.html',
  styleUrls: ['./assign-squad.component.css'],
  providers:[MutantSearchService, SquadService, MutantService]
})
export class AssignSquadComponent implements OnInit {
  mutants: Mutant[]=[];
  squad: Mutant[]=[];
  ids: number[]=[];
  selectedMutant: number;
  selectedSquadMember: number;
  @Output()
  assigned = new EventEmitter<Squad>();
  
  assign() {
      this.squad.forEach(mutant=> this.ids.push(mutant.id));
      this.squadService.createSquad(this.ids).then(s=> this.assigned.emit(s));
  }
  selectMutant(index: number): void{
      this.selectedMutant  = index;
  }
  selectSquadMember(index: number): void{
      this.selectedSquadMember = index;
  }
  
  addToSquad() {
      if (this.mutants.length > 0) {
          this.squad.push(this.mutants.splice(this.selectedMutant, 1)[0]);
      }
      
  }
  removeFromSquad() {
      if( this.squad.length > 0){
          this.mutants.push(this.squad.splice(this.selectedSquadMember, 1)[0]);
      }
  }
  
  constructor(private mutantSearchService: MutantSearchService,
          private squadService: SquadService,
          private mutantService: MutantService) { }

  ngOnInit() {
      this.mutantService.getMutants().then(mutants => this.mutants = mutants);
  }
}
