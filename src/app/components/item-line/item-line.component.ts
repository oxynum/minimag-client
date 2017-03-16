import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-item-line',
  templateUrl: './item-line.component.html',
  styleUrls: ['./item-line.component.scss']
})
export class ItemLineComponent implements OnInit {
  public leftText: string;
  public rightText: string;
  public chipCount: number;
  public withBottomBorder: boolean;
  public isImportant: boolean;
  public onChipClick: Function;

  constructor() {

  }

  ngOnInit() {
  }

}
