import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  template: `
    Hello world {{ total$ | async }}
    <button #inc>Increment</button>
    <button #dec>Decrement</button>
  `
})
export class AppComponent implements AfterViewInit {
  total$: Observable<number>

  @ViewChild('inc') inc: ElementRef;
  @ViewChild('dec') dec: ElementRef;

  ngAfterViewInit(): void {
    const inc$ = Observable.fromEvent(this.inc.nativeElement, 'click').mapTo(+1)
    const dec$ = Observable.fromEvent(this.dec.nativeElement, 'click').mapTo(-1)
    this.total$ = Observable.merge(inc$, dec$).scan((total, val) => total + val)
  }
}
