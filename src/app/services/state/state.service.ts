import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private _state$ = new BehaviorSubject<any>({});

  getState$(key: string) {
    return this._state$.asObservable().pipe(map(state => state[key]));
  }

  setState(key: string, value: any): void {
    const currentState = this._state$.getValue();
    this._state$.next({ ...currentState, [key]: value });
  }

}
