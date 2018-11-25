import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  UsersApiUrl: string = 'https://my-json-server.typicode.com/arcchi/dummy_db/users';

  constructor(public http: HttpClient) {
    
  }

  getUsers():Observable<any> {
    return this.http.get(this.UsersApiUrl).pipe(tap(res=> res));
  }
}
