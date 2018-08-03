import { Component, OnInit } from '@angular/core';
import { Camp } from '../camp';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit {

  upcomingList:Camp[];
  constructor() { }

  ngOnInit() {
    this.upcomingList = [new Camp('Hyderabad',new Date(2018,8,15),5000),
    new Camp('Pune',new Date(2018,9,15),15000),new Camp('Bangalore',new Date(2018,10,15),25000),
    new Camp('Hyderabad',new Date(2018,6,25),12000)];
    
    //this.upcomingList = [new Camp('Pune',new Date(2018,09,15),15000)];
  }

}
