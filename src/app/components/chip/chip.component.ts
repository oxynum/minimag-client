import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mini-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {
  @Input() public count: number;
  @Input() public className: string = "chip-default";
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
