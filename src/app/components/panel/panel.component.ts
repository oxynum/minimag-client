import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  public topComponent: string;
  public bottomComponent: string;
  private itemsForMiniDropDown: Object[] = [{action: 'AJOUTER'}, {action: 'VOIR'}];
  public articles: number = 0;
  private items: Array<Object>;

  constructor() {
    this.items = [
      {
        "EAN": "7896541238526",
        "Name": "Sweet sauce",
        "Price": "10",
        "Promo": "En soldes",
        "State": "En stock",
        "Attribute": "80cm"
      },
      {
        "EAN": "7896541238526",
        "Name": "Sweet sauce",
        "Price": "10",
        "Promo": "En soldes",
        "State": "En stock",
        "Attribute": "80cm"
      },
      {
        "EAN": "7896541238526",
        "Name": "Sweet sauce",
        "Price": "10",
        "Promo": "En soldes",
        "State": "En stock",
        "Attribute": "80cm"
      },
      {
        "EAN": "7896541238526",
        "Name": "Sweet sauce",
        "Price": "10",
        "Promo": "En soldes",
        "State": "En stock",
        "Attribute": "80cm"
      },
      {
        "EAN": "7896541238526",
        "Name": "Sweet sauce",
        "Price": "10",
        "Promo": "En soldes",
        "State": "En stock",
        "Attribute": "80cm"
      },
      {
        "EAN": "7896541238526",
        "Name": "Sweet sauce",
        "Price": "10",
        "Promo": "En soldes",
        "State": "En stock",
        "Attribute": "80cm"
      },
    ]
   }

  ngOnInit() {

  }

  addToArticles(event) {
    this.articles++;
  }
  
}
