import { Component, OnInit } from '@angular/core';

import { SellerService } from "app/service/seller.service";
import { ProductService } from "app/service/product.service";
import { BagComponent } from "app/panel/bag/bag.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: Array<ProductService> = [];

  constructor() {
    this.productList = (new ProductService()).getFakeList();
   }

  ngOnInit() {

  }
   assignCopy() {
     this.productList = Object.assign([], this.productList);
   }
   filteredItem(value) {
     if(!value) this.assignCopy();
     this.productList = Object.assign([], this.productList).filter( item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1)

   }
}
