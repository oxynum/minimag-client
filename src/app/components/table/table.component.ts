import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public headers: string[];
  public rowsData: Object[];

  constructor() { }

  ngOnInit() {
  }

}
