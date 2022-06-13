import { Component } from '@angular/core';
import { Person } from './person.class';
import { PersonService } from './person.service';

@Component({
  selector: 'app-tree',
  templateUrl: 'tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {
  selectedPerson!: Person | null;
  childForParentForm!: Person | null;
  showForm: boolean = false;
  showParentsForm: boolean = false;

  get showForms(): boolean {
    return this.showForm || this.showParentsForm;
  }

  constructor(personSvc: PersonService) {
    this.selectedPerson = personSvc.getSelectedPerson();

    personSvc.personUpdated.subscribe(person => this.selectedPerson = person);
  }

  addPerson(): void {
    this.showForm = true;
  }

  addParents(person: Person | null): void {
    if (person) {
      this.showParentsForm = true;
      this.childForParentForm = person;
    }
  }
}
