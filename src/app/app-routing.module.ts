import { DisasterDetailComponent } from './disaster-detail/disaster-detail.component';
import { DisastersComponent } from './disasters/disasters.component';
import { MutantDetailComponent } from './mutant-detail/mutant-detail.component';
import { MutantsComponent } from './mutants/mutants.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: '/mutants', pathMatch: 'full' },
  { path: 'mutants',  component: MutantsComponent },
  { path: 'mutants/:id', component: MutantDetailComponent },
  { path: 'disasters',     component: DisastersComponent },
  { path: 'disasters/:id',     component: DisasterDetailComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
