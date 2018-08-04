import { Component, OnInit } from '@angular/core';
import { BloodRequest } from '../blood-request';
import { BloodBankAPIService } from '../blood-bank-api.service';
import { BloodDonar } from '../blood-donar';

@Component({
  selector: 'app-blood-req',
  templateUrl: './blood-req.component.html',
  styleUrls: ['./blood-req.component.css'],
  providers:[BloodBankAPIService]
})
export class BloodReqComponent implements OnInit {
  data:any;
  donarList1:any;
  request:BloodRequest = {
    id:2,
    patientName:'',
    location:'',
    city:'',
    reqdate:new Date(2018,8,15),
    name:''
  }
  constructor(private service:BloodBankAPIService) { }

  ngOnInit() {
    this.service.findAllDonors1().subscribe(data => this.donarList1 = data,err=> console.log(err));
  }

  submit(){
    var p = this.service.addDonar(this.request).subscribe(data => this.data = data,err=> console.log(err));
    console.log(p);
    //console.log(this.request);
  }
  editDetails(req:BloodRequest){
    this.request = req;
  }
  delete(){
    var p = this.service.deleteDonar(this.request).subscribe(resp=>console.log(resp));
    console.log(p);
    //console.log(this.request);
  }
  edit(){
    var p = this.service.editDonar(this.request).subscribe(resp=>console.log(resp));
    console.log(p);
  }

}
