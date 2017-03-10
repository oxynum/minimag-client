import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: Array<any> = [];

  constructor() {
   for(let i=0; i< 10; i++) {
    this.productList.push({
      name: "Hello",
      description: "hello is blah blah",
      price: 80
    });
    }
   }

  ngOnInit() {

  }

  
}
