import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {
  public count: number;
  public className: string;

  constructor() { }

  ngOnInit() {
  }

}
