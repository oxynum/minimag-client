import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mini-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Input() public placeholder: string;
  @Input() public defaultValue: string;
  @Input() public onChange: Function;

  constructor() { }

  ngOnInit() {
  }
}
