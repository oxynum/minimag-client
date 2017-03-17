import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mini-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() public text: string;
  @Input() public number: number;

  constructor() { }

  ngOnInit() {
  }

}
