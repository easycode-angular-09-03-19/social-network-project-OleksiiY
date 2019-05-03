import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { GlobalNotificationService } from '../../../../common/services/global-notification.service';
import { CurrentUserStoreService } from '../../../../common/services/current-user-store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNotificationShowed = false;
  isHidden = true;
  notifications;
  userAvatar;
  userId;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private globalNotifcationService: GlobalNotificationService,
    private currentUser: CurrentUserStoreService,
  ) {

  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd)
    )
      .subscribe((event) => {
        this.activatedRoute.firstChild.data.subscribe((value) => {
          this.isHidden = !!value.withoutHeader;
        });
      });
    this.currentUser.userWatcher.subscribe(({ avatar, _id }) => {
      if (_id) {
        this.userAvatar = avatar;
        this.userId = _id;
      }
    });
  }

  showNotification() {
    this.globalNotifcationService.getNotifications().subscribe((data) => {
      this.notifications = data;
    });
    this.isNotificationShowed = !this.isNotificationShowed;
  }

}
