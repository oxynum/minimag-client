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

@NgModule({
  declarations: [
    AppComponent,
    BottomBarComponent,
    PanelComponent,
    SplitterComponent,
    BagComponent,
    NumericPadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
