import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games = [];

  constructor(public gameService: GamesService) {}

  ngOnInit() {
    
  }

  getGames() {
    this.gameService.getGames().subscribe(
      res => this.games = res
    )
  }
}
