import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewFeedsComponent } from './components/view-feeds/view-feeds.component';
import { DetailFeedsComponent } from './components/detail-feeds/detail-feeds.component';
import { CreateFeedComponent } from './components/create-feed/create-feed.component';


const routes: Routes = [

  {path: '', component: ViewFeedsComponent},
  {path: 'update-feed/:feedId', component: DetailFeedsComponent},
  {path: 'create-feed', component: CreateFeedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
