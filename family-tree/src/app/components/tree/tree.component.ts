import { Component } from '@angular/core';
import { Person } from './person.class';
import { PersonService } from './person.service';

@Component({
  selector: 'app-tree',
  template: `<section class="app-person" [person]="selectedPerson"></section>`,
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {
  selectedPerson: Person

  constructor(personSvc: PersonService) {
    this.selectedPerson = personSvc.getSelectedPerson() || new Person("Unbekannt", "");
  }
}
