import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Renderer3 } from '@angular/core/src/render3/interfaces/renderer';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit {
  @Input() fontSize:string;
  @Input() fontWeight:string;
  renderer:Renderer2;//no private so declare
  constructor(private element:ElementRef, renderer:Renderer2) { 
    console.log("fontSize"+this.fontSize);
    this.renderer = renderer;
  }
  ngOnInit():void{
    console.log("fontSize"+this.fontSize);
    //this.element ;
    //this.renderer.
    this.renderer.setStyle(this.element.nativeElement,'fontSize',this.fontSize);
    this.renderer.setStyle(this.element.nativeElement,'fontWeight',this.fontSize);
  }
}
