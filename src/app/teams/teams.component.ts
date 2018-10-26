import { Component, OnInit } from '@angular/core';
import { Teams } from '../teams';
import { George } from '../models';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  ngOnInit() {
  }

}
