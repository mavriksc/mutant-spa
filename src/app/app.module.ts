import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MutantsComponent } from './mutants/mutants.component';
import { DisastersComponent } from './disasters/disasters.component';
import { MutantDetailComponent } from './mutant-detail/mutant-detail.component';
import { DisasterDetailComponent } from './disaster-detail/disaster-detail.component';
import { MutantService } from './mutant.service';
import { AssignSquadComponent } from './assign-squad/assign-squad.component';

@NgModule({
  declarations: [
    AppComponent,
    MutantsComponent,
    DisastersComponent,
    MutantDetailComponent,
    DisasterDetailComponent,
    AssignSquadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [MutantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
