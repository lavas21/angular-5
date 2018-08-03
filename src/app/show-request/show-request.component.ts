import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-request',
  templateUrl: './show-request.component.html',
  styleUrls: ['./show-request.component.css']
})
export class ShowRequestComponent implements OnInit {
  groups:any[] = ['O+','O-','A+','A-','B+','B-'];
  reGrp:string = this.groups[0];
  reDate:Date;
  txtMsg:string;
  
  constructor() { }

  ngOnInit() {
  }
  showData (val){
    this.txtMsg = val;
  }
}
