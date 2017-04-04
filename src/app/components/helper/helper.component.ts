import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.scss']
})
export class HelperComponent implements OnInit {
  private itemsForMiniDropDown: Object[] = [{action: 'SUPPRIMER'}, {action: 'AJOUTER'}];
  public actionFor_miniDropDown: any;

  constructor() { }

  ngOnInit() {
  }

  displayAction(event) {
    this.actionFor_miniDropDown = " hola";
  }
}
