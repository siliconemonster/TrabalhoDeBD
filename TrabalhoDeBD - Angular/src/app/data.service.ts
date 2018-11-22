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
  getPackages() {
    return this.http.get('https://my-json-server.typicode.com/arcchi/dummy_db/packages');
  }
  getCompanies() {
    return this.http.get('https://my-json-server.typicode.com/arcchi/dummy_db/companies');
  }
  getUsers() {
    return this.http.get('https://my-json-server.typicode.com/arcchi/dummy_db/users');
  }
  getTags() {
    return this.http.get('https://my-json-server.typicode.com/arcchi/dummy_db/tags');
  }
}
