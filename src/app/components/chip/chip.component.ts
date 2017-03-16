import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

  constructor(count: number, className: string, onClick: Object) { }

  ngOnInit() {
  }

}
