import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewFeedsComponent } from './components/view-feeds/view-feeds.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailFeedsComponent } from './components/detail-feeds/detail-feeds.component';
import { CreateFeedComponent } from './components/create-feed/create-feed.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ViewFeedsComponent,
    DetailFeedsComponent,
    CreateFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
