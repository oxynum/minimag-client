import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mini-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() public text: string;
  @Input() public important: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
