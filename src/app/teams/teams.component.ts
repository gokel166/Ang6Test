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

  teams = [
    new Teams(1, 'Pistons', 'Detroit', 'Michigan', 'Central Division'),
    new Teams(2, 'Celtics', 'Boston', 'Massachusetts', 'Atlantic Division'),
    new Teams(3, 'Clippers', 'Los Angeles', 'California', 'Pacific Division'),
    new Teams(4, 'Pelicans', 'New Orleans', 'Lousiana', 'Southwest Division'),
    new Teams(5, 'Trailblazers', 'Portland', 'Oregon', 'Northwest Division'),
    new Teams(6, 'Heat', 'Miami', 'Florida', 'Southeast Division')
  ]

  myTeam = this.teams[0];

  ngOnInit() {
  }

}
