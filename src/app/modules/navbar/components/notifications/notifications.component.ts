import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  @Input() notifications;
  constructor() {
    console.log('notifications', Boolean(this.notifications));
  }

  ngOnInit() {
  }

}
