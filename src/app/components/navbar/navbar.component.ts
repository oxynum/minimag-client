import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public topElements: Object[];
  public bottomElements: Object[];

  constructor() {
  }

  ngOnInit() {
  }

}
