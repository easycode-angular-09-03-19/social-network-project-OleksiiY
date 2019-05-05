import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../common/services/user.service';

@Component({
  selector: 'app-winner-page',
  templateUrl: './winner-page.component.html',
  styleUrls: ['./winner-page.component.css']
})
export class WinnerPageComponent implements OnInit {
  winners;
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getWinners().subscribe((data: any) => {
      console.log('data', data);
      this.winners = data.winners;
    });
  }

}
