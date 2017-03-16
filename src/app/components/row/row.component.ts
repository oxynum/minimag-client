import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  public colStrings: string[];
  public button: Component;
  public onButtonClick: Function;
  public disabled: boolean = false;
  public loading: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
