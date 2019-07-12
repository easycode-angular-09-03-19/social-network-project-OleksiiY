import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../common/services/user.service';
import { Followers, Users } from '../../interfaces/Followers';

@Component({
  selector: 'app-profile-following',
  templateUrl: './profile-following.component.html',
  styleUrls: ['./profile-following.component.css']
})
export class ProfileFollowingComponent implements OnInit {
  users: Array<Users>;
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getFollowings().subscribe((data: Followers) => {
      this.users = data.users;
    });
  }

}
