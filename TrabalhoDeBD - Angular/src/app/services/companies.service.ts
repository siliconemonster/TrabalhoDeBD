import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  CompaniesApiUrl: string = 'https://my-json-server.typicode.com/arcchi/dummy_db/companies';

  constructor(public http: HttpClient) {
    
  }

  getCompanies():Observable<any> {
    return this.http.get(this.CompaniesApiUrl).pipe(tap(res=> res));
  }
}
