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

  savTableRoom(){
    firebase.database().ref('/NewRoom').set(this.tableRoom);
  }
  createNewRoom(tableRoom: TableRoom){
    this.tableRoom.push(tableRoom);
    this.savTableRoom();
    this.emitTableRoom();
  }

  getNewRoom() {
    firebase.database().ref('/NewRoom')
      .on('value', (data: DataSnapshot) => {
        this.tableRoom = data.val() ? data.val() : [];
        this.emitTableRoom();
      });
  }

  updateNewRoom(){

  }
}
