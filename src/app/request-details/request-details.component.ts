import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit {

  @Input() reqGrp:string;
  @Input() reqDate:Date;
  @Output() list: EventEmitter<string> = new EventEmitter<string>();
  showData = false;
  childData:string;
  constructor() { }

  ngOnInit() {
  }

  send()
  {
    this.list.emit(this.childData);
    this.showData = true;
  }

}
