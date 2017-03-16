import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor(iconName: string = 'rightArrow', text: string, onClick: Object, disabled: boolean = false) { }

  ngOnInit() {
  }

}
