import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GameServiceService} from '../../../services/game-service.service';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.scss']
})
export class TableFormComponent implements OnInit {

  tableForm: FormGroup;
   okForm: boolean;

  constructor(private formBuilder: FormBuilder,
              private gameService: GameServiceService) { }

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

  onSaveNameAndPlayers() {
    const name = this.tableForm.get('name').value;
    const playersNumber = this.tableForm.get('playersNumber').value;
    this.gameService.createPlayersTable(name, playersNumber);
    this.okForm = true;
  }

}
