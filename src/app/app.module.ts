import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PanelComponent } from './components/panel/panel.component';
import { NavbarComponent } from './components/navbar/navbar.component';

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
import { PreviewComponent } from './components/preview/preview.component';
import { TitleIdentificatorComponent } from './components/title-identificator/title-identificator.component';
import { HelperComponent } from './components/helper/helper.component';

const appRoutes: Routes = [
  // { path: '', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    NavbarComponent,
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
    RowComponent,
    PreviewComponent,
    TitleIdentificatorComponent,
    HelperComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
