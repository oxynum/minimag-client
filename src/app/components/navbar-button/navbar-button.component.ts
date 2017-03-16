import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mini-navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrls: ['./navbar-button.component.scss']
})
export class NavbarButtonComponent implements OnInit {
  @Input() public text: string;
  @Input() public iconName: string;
  @Input() public count: number;
  @Input() public selected: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

}
