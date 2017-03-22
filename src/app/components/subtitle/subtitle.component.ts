import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mini-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.scss']
})
export class SubtitleComponent implements OnInit {
  @Input() public text: string;

  constructor() { }

  ngOnInit() {
  }

}
