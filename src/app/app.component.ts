import { Component, OnInit } from '@angular/core';
import { CurrentUserStoreService } from './common/services/current-user-store.service';
import { GlobalAuthService } from './common/services/global-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private currentUser: CurrentUserStoreService,
    private globalAuth: GlobalAuthService,
  ) {}

  ngOnInit(): void {
    if (this.globalAuth.token) {
      this.currentUser.initCurrentUser();
    }
  }

}
