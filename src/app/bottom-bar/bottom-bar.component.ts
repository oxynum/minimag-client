import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit {
  displayAllMenuItem: boolean = true;
  user: string = "John Doe";
  currentTicket: number = 0; 

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    if(this.displayAllMenuItem) {
      this.displayAllMenuItem = false;
    } else {
      this.displayAllMenuItem = true;
    }
  }
}
