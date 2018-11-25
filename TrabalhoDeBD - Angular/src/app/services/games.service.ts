import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  GamesApiUrl: string = 'https://my-json-server.typicode.com/arcchi/dummy_db/games';

  constructor(public http: HttpClient) {
    console.log('Games Service is just fine');
  }

  getGames():Observable<any> {
    return this.http.get(this.GamesApiUrl).pipe(tap(res=> res));
  }
}
