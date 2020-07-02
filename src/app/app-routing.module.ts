import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableComponent} from './Pages/table/table.component';
import {RulesGameComponent} from './Pages/rules-game/rules-game.component';
import {MainComponent} from './Pages/main/main.component';
import {TableFormComponent} from './Pages/table/table-form/table-form.component';
import {JoinTableFormComponent} from './Pages/table/join-table-form/join-table-form.component';
import {SignUpComponent} from './Pages/auth/sign-up/sign-up.component';
import {SignInComponent} from './Pages/auth/sign-in/sign-in.component';
import {AuthGuard} from './services/auth-guard';


const routes: Routes = [
  { path: 'auth/sign-up', component: SignUpComponent },
  { path: 'auth/sign-in', component: SignInComponent },
  { path: 'Diamant', canActivate: [AuthGuard], component: MainComponent },
  { path: 'Table/:id', canActivate: [AuthGuard], component: TableComponent },
  { path: 'Creation', canActivate: [AuthGuard], component: TableFormComponent },
  { path: 'Join', canActivate: [AuthGuard], component: JoinTableFormComponent },
  { path: 'Regles', component: RulesGameComponent },
  { path: '', redirectTo: 'auth/sign-in', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/sign-in'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
