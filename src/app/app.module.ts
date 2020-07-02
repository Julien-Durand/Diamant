import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*firebase modules*/
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire';

/*Auth service*/
import {AuthService} from './services/auth.service';
import {environment} from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './Pages/table/table.component';
import { BoardGameComponent } from './Pages/board-game/board-game.component';
import { RulesGameComponent } from './Pages/rules-game/rules-game.component';
import { MainComponent } from './Pages/main/main.component';
import { TableFormComponent } from './Pages/table/table-form/table-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { JoinTableFormComponent } from './Pages/table/join-table-form/join-table-form.component';
import { SignInComponent } from './Pages/auth/sign-in/sign-in.component';
import { SignUpComponent } from './Pages/auth/sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    BoardGameComponent,
    RulesGameComponent,
    MainComponent,
    TableFormComponent,
    JoinTableFormComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
