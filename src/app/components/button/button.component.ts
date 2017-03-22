import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mini-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() public iconName: string = 'rightArrow';
  @Input() public text: string;
  @Input() public disabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
