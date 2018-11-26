import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  TagsApiUrl: string = 'https://my-json-server.typicode.com/arcchi/dummy_db/tags';
  AboutTagApiUrl: string = '';
  GameTagsApiUrl: string = '';

  constructor(public http: HttpClient) {
    
  }

  getTags():Observable<any> {
    return this.http.get(this.TagsApiUrl).pipe(tap(res=> res));
  }

  getResAboutTag():Observable<any> {
    return this.http.get(this.AboutTagApiUrl).pipe(tap(res=> res));
  }

  getResGameTags():Observable<any> {
    return this.http.get(this.GameTagsApiUrl).pipe(tap(res=> res));
  }
}
