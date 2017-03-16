import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  public text: string;
  public number: number;

  constructor() { }

  ngOnInit() {
  }

}
