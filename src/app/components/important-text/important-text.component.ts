import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-important-text',
  templateUrl: './important-text.component.html',
  styleUrls: ['./important-text.component.scss']
})
export class ImportantTextComponent implements OnInit {
  public text: string;

  constructor() { }

  ngOnInit() {
  }

}
