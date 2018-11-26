import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-search-game-res',
  templateUrl: './search-game-res.component.html',
  styleUrls: ['./search-game-res.component.css']
})
export class SearchGameResComponent implements OnInit {

  resultados = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.getResGames();
  }

  getResGames() {
    this.gamesService.getResGames().subscribe(
      res => {
        this.resultados = res
        console.log(res);
      }
    )
  }

}
