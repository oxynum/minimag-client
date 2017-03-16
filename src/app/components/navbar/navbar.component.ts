import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(topElements:object[], bottomElements: object[]) {
    this.topElements = topElements;
    this.bottomElements = bottomElements;
  }

  ngOnInit() {
  }

}
