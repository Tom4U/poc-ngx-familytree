import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: '.app-header',
  template: `<h1>{{appTitle}}</h1>`
})
export class HeaderComponent implements OnInit {
  @Input() appTitle: string = "";

  constructor(private titleSvc: Title) { }

  ngOnInit(): void {
    this.titleSvc.setTitle(this.appTitle);
  }

}
