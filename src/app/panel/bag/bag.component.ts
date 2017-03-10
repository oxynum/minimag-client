import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {
  products: Array<any> = []; // will be an Array of Product Services
  discounts: Array<any> = [];
  currentDiscount: number = -4; // will be a Discount object
  
  constructor() { }

  ngOnInit() {
  }

  addToBag() {
    this.products.push({quantity:2, price:10.00, description:"test products"});
  }

  makeTotalForProduct(product: any, discount: number) {
    return (product.quantity * product.price) - discount;
  }
}
