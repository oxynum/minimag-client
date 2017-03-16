import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PanelComponent } from './components/panel/panel.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { TransactionService } from "app/service/transaction.service";
import { ShopService } from "app/service/shop.service";
import { ProductService } from "app/service/product.service";
import { SellerService } from "app/service/seller.service";
import { TicketComponent } from './components/panel/ticket/ticket.component';
import { CatalogComponent } from './components/panel/catalog/catalog.component';
import { ArchiveComponent } from './components/panel/archive/archive.component';
import { SettingComponent } from './components/panel/setting/setting.component';
import { WaitingTicketComponent } from './components/panel/waiting-ticket/waiting-ticket.component';
import { NavbarButtonComponent } from './components/navbar-button/navbar-button.component';
import { ChipComponent } from './components/chip/chip.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ImportantTextComponent } from './components/important-text/important-text.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ItemLineComponent } from './components/item-line/item-line.component';
import { ButtonComponent } from './components/button/button.component';
import { TitleComponent } from './components/title/title.component';
import { SubtitleComponent } from './components/subtitle/subtitle.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CounterComponent } from './components/counter/counter.component';
import { TableComponent } from './components/table/table.component';
import { RowComponent } from './components/row/row.component';

const appRoutes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'archives', component: ArchiveComponent },
  { path: 'settings', component: SettingComponent },
  { path: 'waiting', component: WaitingTicketComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    NavbarComponent,
    TicketComponent,
    CatalogComponent,
    ArchiveComponent,
    SettingComponent,
    WaitingTicketComponent,
    NavbarButtonComponent,
    ChipComponent,
    SidebarComponent,
    ImportantTextComponent,
    DropdownComponent,
    ItemLineComponent,
    ButtonComponent,
    TitleComponent,
    SubtitleComponent,
    SearchBoxComponent,
    SearchBarComponent,
    CounterComponent,
    TableComponent,
    WorComponent,
    RowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
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
