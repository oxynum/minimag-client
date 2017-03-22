import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mini-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {
  @Input() public count: number;
  public optional: string = "";

  constructor() { }

  ngOnInit() {

  }
}
