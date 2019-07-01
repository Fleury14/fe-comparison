import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { AnalysisComponent } from './components/analysis/analysis.component';

const routes: Routes = [{
  path: 'main',
  component: MainComponent
},
{
  path: 'analyze',
  component: AnalysisComponent
},
{
  path: '',
  redirectTo: 'main',
  pathMatch: 'full',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [ MainComponent, AnalysisComponent ];
