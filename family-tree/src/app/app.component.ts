import { Component } from '@angular/core';
import { Person } from './components/tree/person.class';
import { PersonService } from './components/tree/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private personSvc: PersonService) {
    this.generatePerson();
  }

  private generatePerson() {
    const mother = this.getPerson(
      "Wilma", "Wasserstein",
      this.getPerson("Granny", "Mammutschlag", this.getPerson("V", "N"), this.getPerson("V", "N")),
      this.getPerson("Granpa", "Wasserstein"),
    );

    const father = this.getPerson(
      "Fred", "Feuerstein",
      this.getPerson("Granny", "Dinosamt", this.getPerson("V", "N"), this.getPerson("V", "N")),
      this.getPerson("Granpa", "Feuerstein", this.getPerson("V", "N"), this.getPerson("Urgoßvater", "Feuerstein")),
    );

    this.personSvc.selectPerson(this.getPerson("Pebbles", "Feuerstein",mother, father));

  }

  private getPerson(firstname: string, lastname: string, mother?: Person, father?: Person): Person {
    const person = new Person(firstname, lastname);

    if (mother) person.setMother(mother);
    if (father) person.setFather(father);

    return person;
  }
}
