import { Component, OnInit } from '@angular/core';
import { CompInteractionService } from '../comp-interaction.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  activeDonar = 'assets/images/activeDonar.jpg';
  suggestion = "My suggestion";
  constructor(private service: CompInteractionService) { }

  ngOnInit() {
    this.service.currentMsg.subscribe(
      message => {
      console.log('Msg updated' + message);
            this.suggestion = message;
     });   
  }
  getActiveDonarCount():number{
    return 3000;
  }
  newMessage() {
    console.log('Printer is changing message ');
         this.service.changeMsg(' Banner review cahnges');
      } 
}
