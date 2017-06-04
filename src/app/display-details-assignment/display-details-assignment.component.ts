import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details-assignment',
  templateUrl: './display-details-assignment.component.html',
  styleUrls: ['./display-details-assignment.component.css']
})

export class DisplayDetailsAssignmentComponent implements OnInit {

  secretVisible = false;
  clickCount = 1;
  clicks = [];

  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    this.secretVisible = !this.secretVisible;
    this.clicks.push(this.clickCount++);
  }
}
