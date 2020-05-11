import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import {TableRoom} from '../Models/TableRoom.model';
import {Subject} from 'rxjs';
import {PlayersRoom} from '../Models/PlayersRoom.model';

@Injectable({
  providedIn: 'root'
})
export class RoomTableService {

  tableRoom: TableRoom[] = [];
  RoomSubject = new Subject<TableRoom[]>();

  playersRoom: PlayersRoom[] = [];
  playersSubject = new Subject<PlayersRoom[]>();

  constructor() { }

  emitTableRoom(){
    this.RoomSubject.next(this.tableRoom);
  }
  emitPlayersRoom() {
    this.playersSubject.next(this.playersRoom);
  }

  idGenerator(){
    return '' +  Math.random().toString(36).substr(2, 9);
  }

  savTableRoom(id: string){
    firebase.database().ref('/TableRoom/'+id).set(this.tableRoom);
  }

  savPlayersRoom(id: string) {
    firebase.database().ref('/Players/'+id).set(this.playersRoom);
  }

  createNewRoom(tableRoom: TableRoom, id: string){
    this.tableRoom.push(tableRoom);
    this.savTableRoom(id);
    this.emitTableRoom();
  }

  creatPlayerRoom(playersRoom: PlayersRoom, id: string) {
    this.playersRoom.push(playersRoom);
    this.savPlayersRoom(id);
    this.emitPlayersRoom();
  }

  getNewRoom(id: string) {
    firebase.database().ref('/TableRoom/' + id)
      .on('value', (data: DataSnapshot) => {
        this.tableRoom = data.val() ? data.val() : [];
        this.emitTableRoom();
      });
  }

  getCountRoom(id: string) {
    firebase.database().ref('/TableRoom/' + id + '/countPlayer')
      .on('value', (data: DataSnapshot) => {
        this.tableRoom = data.val() ? data.val() : [];
        this.emitPlayersRoom();
      });
  }

  getRoomById(id: string) {
    // return new Promise(
    //   (resolve, reject) => {
    //     firebase.database().ref('/TableRoom/' + id + '/0/PlayerName').once('value').then(
    //       (data: DataSnapshot) => {
    //         resolve(data.val());
    //       }, (error) => {
    //         reject(error);
    //       }
    //     );
    //   }
    // );
    firebase.database().ref('/TableRoom/' + id + '/0/PlayerName')
      .on('value',(snap) => {
      console.log(snap.val());
    });
  }

  updateNewRoom(id: string, name: string){
    // this.getRoomById(id).
    //   then(PlayerName => {
    //     console.log('PlayerName', PlayerName);
    //     console.log(PlayerName.count);
    // })
    // .catch(err => {
    //   console.log(err);
    // });
    // this.getRoomById(id).then(
    //   PlayerName => console.log(PlayerName)
    // );
    // const playername = this.getRoomById(id);

    firebase.database().ref('/TableRoom/'+id+'/0/PlayerName/').push(name);
  }

}
