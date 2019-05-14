import { Component, Input, OnInit } from '@angular/core';
declare var $: any;

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
    this.src = this.item.pictures[0].url;
    $('.pic').on('click', function () {
      $('.imagepreview').attr('src', $(this).find('img').attr('src'));
      $('#imagemodal').modal('show');
      $('.modal-backdrop').css('position', 'static');
    });
  }

}
