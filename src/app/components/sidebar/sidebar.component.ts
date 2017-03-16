import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public itemsInfos: Object[];
  public bottomInfos: Object[];

  // itemsInfos : [{title: string, quantity: number, price: string}]
  // bottomInfos: [{title: string, price: string, important: boolean}]
  constructor() { }

  ngOnInit() {
  }

}
