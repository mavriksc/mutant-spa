import { DisasterService } from '../disaster.service';
import { Disaster } from '../disaster';
import { Characteristic } from '../characteristic';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disasters',
  templateUrl: './disasters.component.html',
  styleUrls: ['./disasters.component.css'],
  providers:[DisasterService]
})
export class DisastersComponent implements OnInit {
    disasters: Disaster[];
    newDisaster: Disaster;  

    addCharacteristic(){
        this.newDisaster.characteristics.push(new Characteristic());
    }
    deleteCharacteristic(i: number){
        this.newDisaster.characteristics.splice(i, 1);        
    }

    getDisasters(): void {
    	this.disasterService.getDisasters().then(disasters => this.disasters = disasters);
    }
    resetForm(): void {
        this.newDisaster = new Disaster();
        this.newDisaster.characteristics = [];
        this.newDisaster.characteristics.push(new Characteristic());
        this.newDisaster.characteristics.push(new Characteristic());
        this.newDisaster.characteristics.push(new Characteristic());
    }
    constructor(private disasterService: DisasterService) { }
    ngOnInit() {
        this.getDisasters();   
        this.resetForm();
    }

}
