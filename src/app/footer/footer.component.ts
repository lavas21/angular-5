import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerTxt:string;
  constructor() { 
    this.footerTxt="Designed by Vo solutions, Copyright message";
  }

  ngOnInit() {
  }

}
