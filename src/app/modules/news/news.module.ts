import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    NewsPageComponent,
    NewsItemComponent,
    NewsListComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    ScrollDispatchModule
  ]
})
export class NewsModule {
}
