import { Component, OnInit } from '@angular/core';
import { FeedsService } from 'src/app/services/feeds.service';
import { UploadService } from 'src/app/services/upload.service';
import { Router } from '@angular/router';
import { Feed } from 'src/app/models/feed';

@Component({
  selector: 'app-create-feed',
  templateUrl: './create-feed.component.html',
  styleUrls: ['./create-feed.component.css'],
  providers: [UploadService]
})
export class CreateFeedComponent implements OnInit {
  feed: Feed;
  status: string;

  constructor(
    private _feedService: FeedsService,
    private _uploadService: UploadService,
    private _router : Router

  ) { 
    this.feed = new Feed();
  }

  ngOnInit() {
  }

  onSubmit(registerForm){
    this._feedService.createFeed(this.feed).subscribe(
        response => {
            if(response.feed && response.feed._id){
                registerForm.reset();
                this.status = "success";
                this._router.navigate(['/']);
            }else{
                this.status = 'error';
            }
        },
        error => {
            this.status = 'error';
            console.log(<any> error);
        }
    );
}

  public filesToUpload: Array<File>;
  fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
