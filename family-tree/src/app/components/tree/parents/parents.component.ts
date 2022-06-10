import { Component, Input } from '@angular/core';
import { Person } from '../person.class';

@Component({
  selector: '.app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss']
})
export class ParentsComponent {
  @Input() mother!: Person;
  @Input() father!: Person;}
