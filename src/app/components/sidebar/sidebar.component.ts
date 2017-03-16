import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // itemsInfos : [{title: string, quantity: number, price: string}]
  // bottomInfos: [{title: string, price: string, important: boolean}]
  constructor(title: text, subtitle: text, itemsInfo: object[], bottomInfos: object[]) { }

  ngOnInit() {
  }

}
