import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Mutant } from '../mutant';

@Component({
  selector: 'mutant-list',
  templateUrl: './mutant-list.component.html',
  styleUrls: ['./mutant-list.component.css']
})
export class MutantListComponent implements OnInit {
   @Input()
   mutants: Mutant[];
   selectedMutant: Mutant;  
   @Output()
   selectedIndex = new EventEmitter<Number>();
   
   select(mutant): void {
       this.selectedMutant = mutant;
       this.selectedIndex.emit(this.mutants.indexOf(this.selectedMutant));
   }

  constructor() { }

  ngOnInit() {
  }

}
