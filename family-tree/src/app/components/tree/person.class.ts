import { FormControl, FormGroup, Validators } from "@angular/forms";

export class Person {
  id: number = 0;

  private mother?: Person;
  private father?: Person;

  constructor(public firstname: string, public lastname: string) {}

  hasParents(): boolean {
    const hasMother = this.mother && this.mother.id > 0;
    const hasFather = this.father && this.father.id > 0;

    if (hasMother || hasFather) return true;

    return false;
  }

  setMother(mother: Person): void {
    this.mother = mother;
  }

  getMother(): Person {
    return this.mother ? this.mother : new Person("Unbekannt", "Unbekannt");
  }

  setFather(father: Person): void {
    this.father = father;
  }

  getFather(): Person {
    return this.father ? this.father : new Person("Unbekannt", "Unbekannt");
  }

  toString(): string {
    return `${this.firstname} ${this.lastname}`;
  }

  toForm(): FormGroup {
    const formGroup = new FormGroup({
      id: new FormControl(this.id),
      firstname: new FormControl(this.firstname),
      lastname: new FormControl(this.lastname)
    }, [Validators.required, Validators.minLength(1)]);

    return formGroup;
  }

  fromForm(form: FormGroup): Person {
    return Object.assign(this, form.value);
  }

  toJsonString(): string {
    return JSON.stringify(this);
  }

  fromJsonString(value: string): Person {
    const rawObject: Person = JSON.parse(value);
    const person = Object.assign(this, rawObject);

    return this.parseParents(person);
  }

  private parseParents(person: Person): Person {
    if (!person.hasParents()) return person;

    let mother = Object.assign(new Person("", ""), person.mother);
    let father = Object.assign(new Person("", ""), person.father);

    if (mother.hasParents()) mother = this.parseParents(mother);
    if (father.hasParents()) father = this.parseParents(father);

    person.setMother(mother);
    person.setFather(father);

    return person;
  }
}
