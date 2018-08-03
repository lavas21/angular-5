import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  parentHeading:string;
  leftlogo:string;
  rightlogo:string;
  constructor() { 
    this.parentHeading = "Voluntary Blood Bank";
    this.leftlogo='assets/images/blood.jpg';
    this.rightlogo='assets/images/savelife.jpg';
  }

  ngOnInit() {
  }

}
