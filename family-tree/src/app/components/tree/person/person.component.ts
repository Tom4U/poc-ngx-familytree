import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../person.class';

@Component({
  selector: '.app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() person!: Person | null;

  @Output() showParentsForm = new EventEmitter<Person | null>();

  mother: Person = new Person("Unbekannt", "");
  father: Person = new Person("Unbekannt", "");

  ngOnInit(): void {
    if (this.person) {
      this.mother = this.person.getMother();
      this.father = this.person.getFather();
    }
  }
}
