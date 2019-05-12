import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  src;
  @Input() item;
  constructor() {
  }

  ngOnInit() {
    console.log('this.item', this.item);
    this.src = this.item.pictures[0].url;

  }

}
