import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games$: object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getGames().subscribe(
      data => this.games$ = data
    )
  }

}
