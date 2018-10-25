import { Component, OnInit, Input, Output, ViewEncapsulation } from '@angular/core';
import { Teams } from '../teams';
import { George } from '../models';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TeamsComponent implements OnInit {

  @Input() george: George;
  @Output() onNameSelected: EventEmitter;
  constructor() { 
    this.onNameSelected = new EventEmitter();
  }

  
  ngOnInit() {
  }

}
