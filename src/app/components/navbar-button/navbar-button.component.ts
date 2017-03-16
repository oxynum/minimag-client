import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrls: ['./navbar-button.component.scss']
})
export class NavbarButtonComponent implements OnInit {

  constructor(text:string, iconSrc:string, count:number, selected: boolean = false) {
    this.text = text;
    this.iconSrc = iconSrc;
    this.count = count;
  }

  ngOnInit() {
  }

}
