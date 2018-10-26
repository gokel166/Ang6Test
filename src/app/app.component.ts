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
  ngOnInit() {}
}
