import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get('https://my-json-server.typicode.com/arcchi/dummy_db/games');
  }
}
