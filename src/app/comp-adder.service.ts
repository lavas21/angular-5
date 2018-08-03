import { Injectable, ViewContainerRef,ComponentFactory,ComponentFactoryResolver, ViewChild } from '@angular/core';
//import { ComponentFactoryResolver } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})

export class CompAdderService {
  viewRef: ViewContainerRef;
  factory: ComponentFactory<{}>;
  constructor(private resolver:ComponentFactoryResolver) {

   }
   setViewContainerRef(viewRef){
    this.viewRef = viewRef;
  }
  addComponent(compToAdd:any){
    this.factory = this.resolver.resolveComponentFactory(compToAdd);
    let compRef = this.factory.create(this.viewRef.parentInjector);
    //this.viewRef.detach(0);//to remove previously added component
    //this.viewRef.
    this.viewRef.insert(compRef.hostView);
  }
}

