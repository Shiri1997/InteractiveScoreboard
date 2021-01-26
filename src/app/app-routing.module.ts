import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { ResultsComponent } from './shared/components/results/results.component';
import { Results2Component } from './shared/components/results2/results2.component';
import { Results3Component } from './shared/components/results3/results3.component';
import {MainPageComponent} from './shared/components/main-page/main-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'result', component: ResultsComponent },
  { path: 'result2', component: Results2Component },
  { path: 'result3', component: Results3Component },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
