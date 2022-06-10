import { Injectable } from '@angular/core';
import { Person } from './person.class';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private selectedPerson?: Person;

  getSelectedPerson(): Person | null {
    return this.selectedPerson ? this.selectedPerson : null;
  }

  selectPerson(person: Person): void {
    this.selectedPerson = person;
  }
}
