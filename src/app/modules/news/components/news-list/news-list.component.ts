import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../../common/services/user.service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;
  newsItems;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.userService.getNews().subscribe((data: any) => {
        this.newsItems = data.news;
        console.log('this.newsItems', this.newsItems);
        console.log('data', data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onScrollChange(event) {
    console.log(event);
    // part 1 limit 10
    // part 2 limit 10
    // part 2 limit 10
    console.log(this.viewport.getRenderedRange())
    console.log(this.viewport.getDataLength());
  }

  trackByIndex(i) {
    return i;
  }

}
