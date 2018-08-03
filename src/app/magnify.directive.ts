import { Directive, Renderer2, ElementRef, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMagnify]'
})
export class MagnifyDirective {
  renderer:Renderer2;//no private so declare
  constructor(private element:ElementRef, renderer:Renderer2) { 
    //console.log("fontSize"+this.fontSize);
    this.renderer = renderer;
  }
  @HostBinding('class.zoom') zoom = false;
  @HostListener('mouseover') onHover() {
    this.zoom = true;
  }
  @HostListener('mouseout') onLeave() {
    this.zoom = false;
  }
}
