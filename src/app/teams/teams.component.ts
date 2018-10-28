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
    new Teams('Pistons', 'Detroit', 'Michigan', 'Central Division'),
    new Teams('Celtics', 'Boston', 'Massachusetts', 'Atlantic Division'),
    new Teams('Clippers', 'Los Angeles', 'California', 'Pacific Division'),
    new Teams('Pelicans', 'New Orleans', 'Lousiana', 'Southwest Division'),
    new Teams('Trailblazers', 'Portland', 'Oregon', 'Northwest Division'),
    new Teams('Heat', 'Miami', 'Florida', 'Southeast Division')
  ]

  myTeam = this.teams[0];

  ngOnInit() {
  }

}
