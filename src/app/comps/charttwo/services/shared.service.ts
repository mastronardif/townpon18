import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // EventEmitter to handle method calls with an argument
  callCharttwoMethod: EventEmitter<any> = new EventEmitter();

  // Method to trigger the event with an argument
  triggerCharttwoMethod(arg: any) {
    this.callCharttwoMethod.emit(arg);
  }
}
