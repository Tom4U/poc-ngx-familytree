import { Component, Input } from '@angular/core';

@Component({
  selector: '.app-footer',
  template: `<p>&copy; {{year}} {{copyright}}</p>`
})
export class FooterComponent {
  @Input() copyright: string = "";

  year = new Date().getFullYear();
}
