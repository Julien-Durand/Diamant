import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RoomTableService} from '../../../services/RoomTable.service';
import {TableRoom} from '../../../Models/TableRoom.model';

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
              private  roomService: RoomTableService) { }

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
    this.roomService.updateNewRoom(id, name);
    this.router.navigate(['/Table', id]);
  }

}
