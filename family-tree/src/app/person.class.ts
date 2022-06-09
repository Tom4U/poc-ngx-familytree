export class Person {
  private mother?: Person;
  private father?: Person;

  constructor(public firstname: string, public lastname: string) {}

  hasParents(): boolean {
    if (this.mother || this.father) return true;

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
}
