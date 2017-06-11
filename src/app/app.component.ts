import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  Hello {{title}}
  `
})
export class AppComponent {
  title = 'World';
}
