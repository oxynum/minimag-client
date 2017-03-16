import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.scss']
})
export class SubtitleComponent implements OnInit {

  constructor(text: string) { }

  ngOnInit() {
  }

}
