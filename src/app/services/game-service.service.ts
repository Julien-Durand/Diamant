import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor() { }

  idGenerator(){
    return '' +  Math.random().toString(36).substr(2, 9);
  }


  createPlayersTable(name: string, players: string) {
    const id = this.idGenerator();
    firebase.database().ref(id + '/Players/P1').set(name);
    firebase.database().ref(id + '/Players/Max').set(players);
  }
}
