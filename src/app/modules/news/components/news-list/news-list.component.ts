import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../../common/services/user.service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { News } from '../../interfaces/News';

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
    this.userService.getNews().subscribe((data: News) => {
        this.newsItems = data.news;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  trackByIndex(i) {
    return i;
  }

}
