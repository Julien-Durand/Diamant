import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import {RoomTableService} from '../../services/RoomTable.service';
import {TableRoom} from '../../Models/TableRoom.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {
  tableRoom: TableRoom[];
  roomSubscription: Subscription;

  constructor(private router: Router,
              private gameService: RoomTableService) { }

  ngOnInit(): void {
    this.roomSubscription = this.gameService.RoomSubject.subscribe(
      (tableRoom: TableRoom[]) => {
        this.tableRoom = tableRoom;
      }
    );
    this.gameService.getNewRoom();
    this.gameService.emitTableRoom();
  }

  ngOnDestroy() {
    this.roomSubscription.unsubscribe();
  }

}
