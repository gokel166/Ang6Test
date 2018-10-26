import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamformComponent } from './teamform/teamform.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamformComponent,
    TeamformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
