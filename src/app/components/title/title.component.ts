import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  constructor(text: string, important: boolean = true) { }

  ngOnInit() {
  }

}
