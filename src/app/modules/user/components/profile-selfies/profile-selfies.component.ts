import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../common/services/user.service';
import { Images } from '../../interfaces/Images';

@Component({
  selector: 'app-profile-selfies',
  templateUrl: './profile-selfies.component.html',
  styleUrls: ['./profile-selfies.component.css']
})
export class ProfileSelfiesComponent implements OnInit {
  images;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUserImages().subscribe((data: Images) => {
      this.images = data.images;
    });
  }

}
