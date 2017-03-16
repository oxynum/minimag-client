import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  public topComponent: string;
  public bottomComponent: string;

  constructor() { }

  ngOnInit() {

  }

}
