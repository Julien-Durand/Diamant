import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RoomTableService} from '../../../services/RoomTable.service';
import {TableRoom} from '../../../Models/TableRoom.model';
import {AuthService} from '../../../services/auth.service';
import {PlayersRoom} from '../../../Models/PlayersRoom.model';

@Component({
  selector: 'app-join-table-form',
  templateUrl: './join-table-form.component.html',
  styleUrls: ['./join-table-form.component.scss']
})
export class JoinTableFormComponent implements OnInit {

  joinForm: FormGroup;
  name = [];

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private  roomService: RoomTableService,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.joinForm = this.formBuilder.group(
      {
        idTable : ['', Validators.required],
        name : ['', Validators.required]
      });
  }

  onJoin() {
    const id = this.joinForm.get('idTable').value;
    const name = this.joinForm.get('name').value;
    const idPseudo = this.auth.currentUserId;
    const playersRoom = new PlayersRoom(name, idPseudo);
    this.roomService.updateNewRoom(playersRoom, id);
    this.router.navigate(['/Table', id]);
  }

}
