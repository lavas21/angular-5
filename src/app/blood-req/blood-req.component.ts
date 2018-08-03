import { Component, OnInit } from '@angular/core';
import { BloodRequest } from '../blood-request';

@Component({
  selector: 'app-blood-req',
  templateUrl: './blood-req.component.html',
  styleUrls: ['./blood-req.component.css']
})
export class BloodReqComponent implements OnInit {
  request:BloodRequest = {
    id:2,
    patientName:'',
    hospName:'',
    city:'',
    reqdate:new Date(2018,8,15)
  }
  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log(this.request);
  }

}
