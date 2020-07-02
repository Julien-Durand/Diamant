import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import {TableRoom} from '../Models/TableRoom.model';
import {Subject} from 'rxjs';
import {PlayersRoom} from '../Models/PlayersRoom.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoomTableService {

  tableRoom: TableRoom[] = [];
  RoomSubject = new Subject<TableRoom[]>();

  playersRoom: PlayersRoom[] = [];
  playersSubject = new Subject<PlayersRoom[]>();

  constructor(private db: AngularFirestore,
              private auth: AuthService) { }

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

  addNewRoom(tableRoom: TableRoom, id: string) {
    const room = {...tableRoom};
    this.db.collection('/TableRoom').doc(id).set(room);
  }

  createNewRoom(tableRoom: TableRoom, id: string){
    this.addNewRoom(tableRoom, id);
    this.emitTableRoom();
  }

  addPlayer(playersRoom: PlayersRoom, id: string) {
    const player = {...playersRoom};
    this.db.collection('/Players').doc(id).set(player);
  }

  creatPlayerRoom(playersRoom: PlayersRoom, id: string) {
    this.addPlayer(playersRoom, id);
    this.emitPlayersRoom();
  }

  getNewRoom(id: string) {
    firebase.database().ref('/TableRoom/' + id)
      .on('value', (data: DataSnapshot) => {
        this.tableRoom = data.val() ? data.val() : [];
        this.emitTableRoom();
      });
  }
  getTest() {
    return this.db.collection('/TableRoom/' ).snapshotChanges();
  }
  updateNewRoom(playersRoom: PlayersRoom, id: string){
    const player = {...playersRoom};
    this.db.collection('/Players').doc(id).set(player);
  }







}
