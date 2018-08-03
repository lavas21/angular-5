import { Component, OnInit } from '@angular/core';
import { BloodDonar} from '../blood-donar';
import { BloodBankAPIService } from '../blood-bank-api.service';
 
@Component({
  selector: 'app-donar-details',
  templateUrl: './donar-details.component.html',
  styleUrls: ['./donar-details.component.css'],
  providers:[BloodBankAPIService]
})
export class DonarDetailsComponent implements OnInit {
  donarList: BloodDonar[];
  enableBtn = true;
  details:string;
  detailList: MapConstructor;
  searchGrp;
  enableCls: boolean = false;
  constructor(private service:BloodBankAPIService) { 


  }

  ngOnInit() {
   /* this.donarList = [
      {id:1,name:'Lavanya',location:'Hyderabad',mobileNumber:9635641258,bloodGroup:'O+'},
      {id:2,name:'Vijaya',location:'Hyderabad',mobileNumber:9635642358,bloodGroup:'O-'},
      {id:3,name:'Anand',location:'Chennai',mobileNumber:5689642358,bloodGroup:'B+'},
      {id:4,name:'Meghana',location:'Pune',mobileNumber:4255642358,bloodGroup:'A-'},
      {id:5,name:'Kalyan',location:'Bangalore',mobileNumber:8635642358,bloodGroup:'AB-'}
    ];*/
    this.service.findAllDonors().subscribe(data => this.donarList = data,err=> console.log(err));
  }

  showDetails(name:string):void{
    //this.enableBtn = true;
    //if(name == 'Lavanya'){
    this.details =name+" Has donated more than "+this.getDetails(name) +" times";
    /*this.enableBtn = true;
    }*/
  }

  getDetails(name:string):number{
    let detailList = new Map<string, number>();
    for(let i=0;i<this.donarList.length;i++){
      detailList.set(this.donarList[i].name,(i+1)*10);
    }
    /*detailList.set("Lavanya","50");
    detailList.set("Vijaya","20");
    detailList.set("Meghana","30");
    detailList.set("Kalyan","40");
    detailList.set("Ramesh","60");*/
    return detailList.get(name);
  }
  changeStyle(){
    this.enableCls = true;
  }

}
