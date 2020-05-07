import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './Pages/table/table.component';
import { BoardGameComponent } from './Pages/board-game/board-game.component';
import { RulesGameComponent } from './Pages/rules-game/rules-game.component';
import { MainComponent } from './Pages/main/main.component';
import { TableFormComponent } from './Pages/table/table-form/table-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { JoinTableFormComponent } from './Pages/table/join-table-form/join-table-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    BoardGameComponent,
    RulesGameComponent,
    MainComponent,
    TableFormComponent,
    JoinTableFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
