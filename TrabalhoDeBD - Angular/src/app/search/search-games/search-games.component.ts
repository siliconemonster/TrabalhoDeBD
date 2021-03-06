import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-search-games',
  templateUrl: './search-games.component.html',
  styleUrls: ['./search-games.component.css']
})
export class SearchGamesComponent implements OnInit {

  constructor(public gamesService: GamesService) {}

  ngOnInit() {
    
  }

  onSubmitGames(searchGames) {
    console.log(searchGames);
  }
}
