import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-controls',
  templateUrl: './profile-controls.component.html',
  styleUrls: ['./profile-controls.component.css']
})
export class ProfileControlsComponent implements OnInit {
  @Input() user;
  constructor() { }

  ngOnInit() {
    console.log('this.user', this.user);
  }

}
