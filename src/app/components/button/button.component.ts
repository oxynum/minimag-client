import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mini-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() public iconName: string = "icon-forward-right-arrow-button";
  @Input() public text: string;
  @Input() public disabled: boolean = false;
  @Input() public dynamicValue: string = "";

  constructor() { }

  ngOnInit() {
  }
}