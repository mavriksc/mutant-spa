import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }                 from '@angular/common';
import { DisasterService } from '../disaster.service';
import { Disaster } from '../disaster';
import { Squad } from '../squad';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-disaster-detail',
  templateUrl: './disaster-detail.component.html',
  styleUrls: ['./disaster-detail.component.css'],
  providers:[DisasterService]
})
export class DisasterDetailComponent implements OnInit {
    disaster: Disaster;

  constructor(private disasterService: DisasterService,
          private route: ActivatedRoute,
          private location: Location) { }
  
  assignSquad(squad: Squad):void{
      this.disaster.squad = squad;
      this.update();
  }
  debreif(disasterAvoided: boolean): void {
      this.disaster.disasterAverted = disasterAvoided;
      this.update();
      
  }
  update():void{
      this.disasterService.updateDisaster(this.disaster.id, this.disaster).then(d=> this.disaster = d);      
  }

  ngOnInit() {
      this.route.params
      .switchMap((params: Params) => this.disasterService.getDisaster(+params['id']))
      .subscribe(d => this.disaster = d);      
  }
}
