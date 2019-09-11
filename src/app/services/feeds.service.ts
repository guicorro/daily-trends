import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedsService {
  public url: string;

  constructor(
    private _http: HttpClient

  ) {
    this.url = 'http://localhost:8080/';

  }


  getFeeds(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.get(this.url + 'feeds/', { headers: headers });
  }

  webScrapper(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.get(this.url + 'webScrapper/', { headers: headers });
  }

  createFeed(feedId): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.put(this.url + 'feed/' + feedId, { headers: headers });
  }

  updateFeed(feedId): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.post(this.url + 'feed/' + feedId, { headers: headers });
  }

  deleteFeed(feedId): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.delete(this.url + 'feed/' + feedId, { headers: headers });
  }
}
