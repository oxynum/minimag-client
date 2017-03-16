import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  public iconName: string = 'rightArrow';
  public text: string;
  public disabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
