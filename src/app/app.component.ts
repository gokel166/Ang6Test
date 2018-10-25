import { Component } from '@angular/core';
import { Teams } from './teams';
import { George } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  teams : Teams;

  george : George;
  selectedName: string;

  constructor() {
    this.george = new George();
    this.selectedName = this.george.lastName;
  }

  ngOnInit() {}

  updateName(selectedName: string): void {
    console.log('in parent');
    this.selectedName = selectedName;
  }
}
