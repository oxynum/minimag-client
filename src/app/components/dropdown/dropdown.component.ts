import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  // items: [{title: string, onClick: function}]
  public items: Object[];

  constructor() {}

  ngOnInit() {
  }

}
