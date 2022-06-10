import { Component, Input } from '@angular/core';

@Component({
  selector: '.app-master-layout',
  templateUrl: './master-layout.component.html',
  styleUrls: ['./master-layout.component.scss']
})
export class MasterLayoutComponent {
  @Input() appTitle: string = "";
  @Input() copyright: string = "";
}
