import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompInteractionService {
  msg = new BehaviorSubject<string>("Check Reviews");
  currentMsg = this.msg.asObservable();
  constructor() { }
  changeMsg(message:string){
    this.msg.next(message);
  }
}
