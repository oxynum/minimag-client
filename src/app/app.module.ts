import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { PanelComponent } from './panel/panel.component';
import { SplitterComponent } from './panel/splitter/splitter.component';
import { BagComponent } from './panel/bag/bag.component';
import { NumericPadComponent } from './panel/numeric-pad/numeric-pad.component';
import { ProductsComponent } from './panel/products/products.component';

import { TransactionService } from "app/service/transaction.service";
import { ShopService } from "app/service/shop.service";
import { ProductService } from "app/service/product.service";
import { SellerService } from "app/service/seller.service";

@NgModule({
  declarations: [
    AppComponent,
    BottomBarComponent,
    PanelComponent,
    SplitterComponent,
    BagComponent,
    NumericPadComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ProductService,
    ShopService,
    TransactionService,
    SellerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
