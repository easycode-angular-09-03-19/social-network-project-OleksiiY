import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../common/services/user.service';
import { Images } from '../../interfaces/Images';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile-selfies',
  templateUrl: './profile-selfies.component.html',
  styleUrls: ['./profile-selfies.component.css']
})
export class ProfileSelfiesComponent implements OnInit {
  images;
  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.userService.getUserImages().subscribe((data: Images) => {
      this.images = data.images;
    });
  }

  loadPhotos(input) {
    const files = Array.from(input.files);
    this.userService.uploadPhotos(files).subscribe((data) => {
      this.messageService.add({severity: 'success', summary: 'Added photo', detail: 'successfully'});
      this.userService.getUserImages().subscribe((item: Images) => {
        this.images = item.images;
      });
    }, (err) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Server Error' });
    });
  }

}
