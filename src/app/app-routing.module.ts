import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableComponent} from './Pages/table/table.component';
import {RulesGameComponent} from './Pages/rules-game/rules-game.component';
import {MainComponent} from './Pages/main/main.component';
import {TableFormComponent} from './Pages/table/table-form/table-form.component';


const routes: Routes = [
  { path: 'Diamant', component: MainComponent },
  { path: 'Table', component: TableComponent },
  { path: 'Creation', component: TableFormComponent },
  { path: 'Regles', component: RulesGameComponent },
  { path: '', redirectTo: 'Diamant', pathMatch: 'full' },
  { path: '**', redirectTo: 'Diamant'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
