import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  GamesApiUrl: string = 'https://my-json-server.typicode.com/arcchi/dummy_db/games';
  GamesResApiUrl: string = '';

  constructor(public http: HttpClient) {
    
  }

  getGames():Observable<any> {
    return this.http.get(this.GamesApiUrl).pipe(tap(res=> res));
  }

  getResGames():Observable<any> {
    return this.http.get(this.GamesResApiUrl).pipe(tap(res=> res));
  }
}
