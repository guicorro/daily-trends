import { Component, OnInit } from '@angular/core';

import { FeedsService } from 'src/app/services/feeds.service';

import { Feed } from 'src/app/models/feed';

@Component({
  selector: 'app-view-feeds',
  templateUrl: './view-feeds.component.html',
  styleUrls: ['./view-feeds.component.css']
})
export class ViewFeedsComponent implements OnInit {
  status: string;
  feeds: Feed[];
  feed: Feed;

  constructor(
    private _feedService: FeedsService
  ) {
   }

  ngOnInit() {
    this.getFeeds();
  }

  webScrapper(){
    this._feedService.webScrapper().subscribe(
        response => {
        },
        error =>{
            console.log(<any>error)
            this.status = 'error';
        }
    )
  }

  getFeeds(){
    this._feedService.getFeeds().subscribe(
        response => {
          if(!response.feeds){
              this.status = 'error';
          }else{
              this.feeds = response.feeds;
          }
        },
        error =>{
            console.log(<any>error)
            this.status = 'error';
        }
    )
  }

  deleteFeed(feedId){
    this._feedService.deleteFeed(feedId).subscribe(
        response => {
          alert(response);
          this.getFeeds();
        },
        error =>{
            console.log(<any>error)
            this.status = 'error';
        }
    )
  }

}
