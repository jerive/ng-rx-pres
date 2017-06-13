import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from "app/store/model";

@Component({
  selector: 'app-root',
  template: `
    Hello world {{ total$ | async }}
    <button (click)="store.dispatch({type: 'INC'})">Increment</button>
    <button (click)="store.dispatch({type: 'DEC'})">Decrement</button>
  `
})
export class AppComponent {
  constructor(
    private store: NgRedux<IAppState>
  ) { }

  @select() total$: Observable<number>
}
