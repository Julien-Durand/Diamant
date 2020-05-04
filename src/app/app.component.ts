import { Component } from '@angular/core';
import * as firebase from 'firebase';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {
    const firebaseConfig = {
      apiKey: "AIzaSyDmpko__XhYI4S-zZDKGHYcym_dfRp4G2M",
      authDomain: "diamant-game.firebaseapp.com",
      databaseURL: "https://diamant-game.firebaseio.com",
      projectId: "diamant-game",
      storageBucket: "diamant-game.appspot.com",
      messagingSenderId: "458572621094",
      appId: "1:458572621094:web:c835bde61a4576d0594de7"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
