import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PanelComponent } from './components/panel/panel.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { TransactionService } from "app/service/transaction.service";
import { ShopService } from "app/service/shop.service";
import { ProductService } from "app/service/product.service";
import { SellerService } from "app/service/seller.service";
import { TicketComponent } from './components/panel/ticket/ticket.component';
import { CatalogComponent } from './components/panel/catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    NavbarComponent,
    TicketComponent,
    CatalogComponent
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
