import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  constructor(placeholder: string, defaultValue: string, onChange: Function) { }

  ngOnInit() {
  }

}
