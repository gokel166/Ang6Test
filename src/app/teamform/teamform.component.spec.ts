/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeamformComponent } from './teamform.component';

describe('TeamformComponent', () => {
  let component: TeamformComponent;
  let fixture: ComponentFixture<TeamformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
