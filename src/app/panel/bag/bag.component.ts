import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {
  items: Array<any> = [];
  constructor() { }

  ngOnInit() {
  }

  addToBag() {
    this.items.push("Echo");
  }
}
