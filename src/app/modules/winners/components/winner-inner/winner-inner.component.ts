import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-winner-inner',
  templateUrl: './winner-inner.component.html',
  styleUrls: ['./winner-inner.component.css']
})
export class WinnerInnerComponent implements OnInit {
  @Input() winner;
  constructor() { }

  ngOnInit() {
  }

}
