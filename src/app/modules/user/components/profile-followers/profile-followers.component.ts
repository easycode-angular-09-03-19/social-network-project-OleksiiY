import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../common/services/user.service';
import { Followers } from '../../interfaces/Followers';

@Component({
  selector: 'app-profile-followers',
  templateUrl: './profile-followers.component.html',
  styleUrls: ['./profile-followers.component.css']
})
export class ProfileFollowersComponent implements OnInit {
  users;
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getFollowers().subscribe((data: Followers) => {
      this.users = data.users;
    });
  }

}
