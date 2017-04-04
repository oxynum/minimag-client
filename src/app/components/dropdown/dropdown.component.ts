import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mini-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  // items: [{actionName: string, actionMethod: function}]
  // TODO:: Erase this version and put a template in Object[] declaration.
  
  @Input() public actions: Object[];
  @Output() actionEvent: EventEmitter<String> = new EventEmitter();
  public dropdownWatcher: boolean = false;

  constructor() {}

  ngOnInit() {
  }

  /**
   * Will send an action to execute to a possible parent component.
   * @param {Object} event that is sent by the component with an action to make the parent execute.
   */
  sendAction(event) {
    this.actionEvent.next(event);
  }

  /**
   * Will toggle the dropdown menu open.
   * @param {NoParam}
   */
  toggleOpen() {
    if(this.dropdownWatcher) {
      this.dropdownWatcher = false;
    } else {
      this.dropdownWatcher = true;
    }
  }
}
