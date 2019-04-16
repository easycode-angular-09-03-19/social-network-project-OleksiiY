import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { GlobalNotificationService } from '../../../../common/services/global-notification.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNotificationShowed = false;
  isHidden = true;
  notifications;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private globalNotifcationService: GlobalNotificationService,
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
    this.globalNotifcationService.getNotifications().subscribe((data) => {
      this.notifications = data;
    });
  }

  showNotification() {
    this.isNotificationShowed = !this.isNotificationShowed;
  }

}
