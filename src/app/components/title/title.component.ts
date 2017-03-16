import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  public text: string;
  public important: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
