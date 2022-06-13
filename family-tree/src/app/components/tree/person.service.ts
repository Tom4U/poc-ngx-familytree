import { EventEmitter, Injectable } from '@angular/core';
import { Person } from './person.class';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  public personUpdated = new EventEmitter<Person>();

  private readonly storageKey = 'person';

  private selectedPerson?: Person;

  constructor() {
    this.loadPersonFromStorage();
  }

  getSelectedPerson(): Person | null {
    return this.selectedPerson ? this.selectedPerson : null;
  }

  selectPerson(person: Person): void {
    this.selectedPerson = person;
  }

  updatePerson(person: Person): void {
    if (!this.selectedPerson) person.id = 1;

    if (!this.selectedPerson || this.selectedPerson?.id === person.id)
      this.selectedPerson = person;
    else
      this.updateParent(this.selectedPerson, person);

    this.storePersonInStorage();
    this.loadPersonFromStorage();
  }

  generateNewId(counter?: number, person?: Person): number {
    let currentId = counter ? counter : 1;

    if (!person && !this.selectedPerson) return currentId;

    if (!person && this.selectedPerson) person = this.selectedPerson;

    if (person?.hasParents()) {
      currentId = this.generateNewId(person.id + 1, person.getMother());
      currentId = this.generateNewId(currentId + 1, person.getFather());
    } else {
      currentId++;
    }

    return currentId;
  }

  loadPersonFromStorage(): void {
    const storageValue: string = sessionStorage.getItem(this.storageKey) || '';

    if (storageValue.length === 0) return;

    const person = new Person("", "");

    this.selectedPerson = person.fromJsonString(storageValue);

    this.personUpdated.emit(this.selectedPerson);
  }

  private storePersonInStorage(): void {
    if (!this.selectedPerson) return;

    sessionStorage.setItem(this.storageKey, this.selectedPerson.toJsonString());
  }

  private updateParent(child: Person, parent: Person): void {

    if (child.getFather().id === parent.id) {
      child.setFather(parent);
      return;
    }

    if (child.getMother().id === parent.id) {
      child.setMother(parent);
      return;
    }

    this.updateParent(parent, parent.getFather());
    this.updateParent(parent, parent.getMother());
  }
}
