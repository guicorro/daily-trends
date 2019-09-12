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

    return this._http.get(this.url + 'webScrapping/', { headers: headers });
  }

  getFeed(feedId): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.get(this.url + 'feed/' + feedId, { headers: headers });
  }


  createFeed(feed): Observable<any> {
    let params = JSON.stringify(feed);
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.post(this.url + 'feed/', params, { headers: headers });
  }

  updateFeed(feed): Observable<any> {
    let params = JSON.stringify(feed);

    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.put(this.url + 'feed/' + feed._id, params, { headers: headers });
  }

  deleteFeed(feedId): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.delete(this.url + 'feed/' + feedId, { headers: headers });
  }
}
