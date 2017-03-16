import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  constructor(colStrings: string[], button: Component, onButtonClick: Function, disabled: boolean = false, loading: boolean = false) { }

  ngOnInit() {
  }

}
