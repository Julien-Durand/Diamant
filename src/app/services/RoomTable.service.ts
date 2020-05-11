import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import {TableRoom} from '../Models/TableRoom.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomTableService {

  tableRoom: TableRoom[] = [];
  RoomSubject = new Subject<TableRoom[]>();

  constructor() { }

  emitTableRoom(){
    this.RoomSubject.next(this.tableRoom);
  }

  idGenerator(){
    return '' +  Math.random().toString(36).substr(2, 9);
  }

  savTableRoom(id: string){
    firebase.database().ref('/TableRoom/'+id).set(this.tableRoom);
  }
  createNewRoom(tableRoom: TableRoom, id: string){
    this.tableRoom.push(tableRoom);
    this.savTableRoom(id);
    this.emitTableRoom();
  }

  getNewRoom(id: string) {
    firebase.database().ref('/TableRoom/' + id)
      .on('value', (data: DataSnapshot) => {
        this.tableRoom = data.val() ? data.val() : [];
        this.emitTableRoom();
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
