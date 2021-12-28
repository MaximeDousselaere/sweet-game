import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-body',
  templateUrl: './game-body.component.html',
  styleUrls: ['./game-body.component.scss']
})
export class GameBodyComponent implements OnInit {

  multiplicateur : number = 1;
  bbverts : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
