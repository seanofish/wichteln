import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hidePW = true;

  constructor() { }

  ngOnInit() {
  }

}
