import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  PackagesApiUrl: string = 'https://my-json-server.typicode.com/arcchi/dummy_db/packages';
  GamePackageResUrl: string = '';
  PackageResUrl: string = '';

  constructor(public http: HttpClient) {
    
  }

  getPackages():Observable<any> {
    return this.http.get(this.PackagesApiUrl).pipe(tap(res=> res));
  }

  getResGamePackage():Observable<any> {
    return this.http.get(this.GamePackageResUrl).pipe(tap(res=> res));
  }

  getResPackage():Observable<any> {
    return this.http.get(this.PackageResUrl).pipe(tap(res=> res));
  }
}
