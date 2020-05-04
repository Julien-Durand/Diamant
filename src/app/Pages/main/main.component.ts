import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //Method for routing the start btn on the first page
  onNewTable() {
    this.router.navigate(['/Table']);
  }
  onRules() {
    this.router.navigate(['/Regles']);
  }
  joinTable() {
    this.router.navigate(['']);
  }

}
