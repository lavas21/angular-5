import { Component, OnInit, ViewChild, AfterContentInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { CompAdderService } from '../comp-adder.service';
import { FutureComponent } from '../future/future.component';
import { PastComponent } from '../past/past.component';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
  //encapsulation:ViewEncapsulation.Native//only component specific styles will be applied
  encapsulation:ViewEncapsulation.Emulated//by default all styles will be applied
})
export class DashBoardComponent implements OnInit, AfterContentInit {
  @ViewChild('campInfo',{read:ViewContainerRef}) viewRef : ViewContainerRef;
  @ViewChild(BannerComponent) banner: BannerComponent;
  activeImg: string;
  activeCount: number;
  constructor(private adderService: CompAdderService) { }
  ngOnInit() {
  }

  ngAfterContentInit(){
    this.activeImg = this.banner.activeDonar;
    this.activeCount = this.banner.getActiveDonarCount();
  }
  countInc(){
    console.log(this.activeCount+"count");
    this.activeCount = this.activeCount+1;
  }
  newMsg(){
    this.banner.newMessage();
  }

  add(){
    
    this.adderService.setViewContainerRef(this.viewRef);
    this.adderService.addComponent(FutureComponent);
    //this.adderService.addComponent()
  }
  add1(){
    
    this.adderService.setViewContainerRef(this.viewRef);
    this.adderService.addComponent(PastComponent);
    //this.adderService.addComponent()
  }
}
