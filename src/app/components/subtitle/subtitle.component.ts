import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.scss']
})
export class SubtitleComponent implements OnInit {
  public text: string;

  constructor() { }

  ngOnInit() {
  }

}
