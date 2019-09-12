import { Component, OnInit } from '@angular/core';

import { FeedsService } from 'src/app/services/feeds.service';

import { Feed } from 'src/app/models/feed';
import { Router } from '@angular/router';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-detail-feeds',
  templateUrl: './detail-feeds.component.html',
  styleUrls: ['./detail-feeds.component.css'],
  providers: [UploadService]

})
export class DetailFeedsComponent implements OnInit {
  status: string;
  feeds: Feed[];
  feed: Feed;
  feedId: string;
  url: string;

  constructor(
    private _feedService: FeedsService,
    private _uploadService: UploadService,
    private _router : Router
  ) { 
    this.url = 'http://localhost:8080/';

  }

  ngOnInit() {
    this.feedId = this._router.url.slice(13);
    this.getFeed(this.feedId)
  }

  updateFeed(){
    this._feedService.updateFeed(this.feed).subscribe(
        response => {
          alert('Editado con exito');
          if(this.filesToUpload){
            //Subida avatar usuario
            this._uploadService.makeFileRequest(this.url + 'upload-image-feed/' + this.feed._id, [], this.filesToUpload, 'image')
                                .subscribe((result: any) => {
                this.feed.image = result.feed.image;
            });
          }
        },
        error =>{
            console.log(<any>error)
            this.status = 'error';
        }
    )
  }

  public filesToUpload: Array<File>;
  fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  getFeed(feedId){
    this._feedService.getFeed(feedId).subscribe(
        response => {
            if(!response.feed){
                this.status = 'error';
            }else{
                this.feed = response.feed;
            }
        },
        error =>{
            console.log(<any>error)
            this.status = 'error';
        }
    )
  }



}
