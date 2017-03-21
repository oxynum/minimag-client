import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mini-title-identificator',
  templateUrl: './title-identificator.component.html',
  styleUrls: ['./title-identificator.component.scss']
})
export class TitleIdentificatorComponent implements OnInit {
  @Input() public text:string = "Title";
  @Input() public dynamicValue:string = "dynamic";
  
  constructor() { }

  ngOnInit() {
  }

}
