import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-item-line',
  templateUrl: './item-line.component.html',
  styleUrls: ['./item-line.component.scss']
})
export class ItemLineComponent implements OnInit {

  constructor(leftText: string, rightText: string, chipCount: number,
    withBottomBorder: boolean, isImportant: boolean, onChipClick: Object) {

  }

  ngOnInit() {
  }

}
