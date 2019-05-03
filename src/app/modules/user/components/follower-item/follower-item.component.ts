import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../../common/services/user.service';
import { CurrentUserStoreService } from '../../../../common/services/current-user-store.service';

@Component({
  selector: 'app-follower-item',
  templateUrl: './follower-item.component.html',
  styleUrls: ['./follower-item.component.css']
})
export class FollowerItemComponent implements OnInit {
  @Input() user;
  isFollowed = true;

  constructor(
    private userService: UserService,
    private currentUserStoreService: CurrentUserStoreService
  ) {
  }

  ngOnInit() {
    // @ts-ignore
    this.isFollowed = this.currentUserStoreService.info.followings.some((elem) => elem === this.user._id);
  }

  updateFollower() {
    this.userService.updateFollower(this.user._id).subscribe((data) => {
      console.log('data', data);
      this.isFollowed = !this.isFollowed;
      this.currentUserStoreService.initCurrentUser();
    });
  }
}
