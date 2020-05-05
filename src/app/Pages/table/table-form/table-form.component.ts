import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GameServiceService} from '../../../services/game-service.service';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {TableRoom} from '../../../Models/TableRoom.model';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.scss']
})
export class TableFormComponent implements OnInit {

  tableForm: FormGroup;
  okForm: boolean;
  IdTable: string;

  constructor(private formBuilder: FormBuilder,
              private gameService: GameServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.tableForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        playersNumber: ['', Validators.required]
      });
  }

  onSaveNewRoom() {
    const name = this.tableForm.get('name').value;
    const playersNumber = this.tableForm.get('playersNumber').value;
    const idTable = this.gameService.idGenerator();
    const newRoom = new TableRoom(idTable, name, playersNumber);
    this.gameService.createNewRoom(newRoom);
    this.router.navigate(['/Table']);
  }

}
