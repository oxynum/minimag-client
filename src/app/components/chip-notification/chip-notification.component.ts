import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mini-chip-notification',
  templateUrl: './chip-notification.component.html',
  styleUrls: ['./chip-notification.component.scss']
})
export class ChipNotificationComponent implements OnInit {
  @Input() public count: number;
  @Input() public className: string = "chip-notif-blue";
  public optional: string = "";

  constructor() { }

  ngOnInit() {
    if(this.isCountTooBig()) {
      this.count = 99;
      this.optional = "+";
    }
  }

  isCountTooBig() {
    return this.count > 99;
  }
}
