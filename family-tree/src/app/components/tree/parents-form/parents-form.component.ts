import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Person } from '../person.class';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-parents-form',
  templateUrl: './parents-form.component.html',
  styleUrls: ['./parents-form.component.scss']
})
export class ParentsFormComponent implements OnInit {
  @Input() person!: Person | null;

  @Output() close = new EventEmitter<Person>();

  form: FormGroup;
  motherForm: FormGroup;
  fatherForm: FormGroup;

  constructor(private personSvc: PersonService) {
    const mother = new Person("", "");
    const father = new Person("", "");

    mother.id = this.personSvc.generateNewId();
    father.id = this.personSvc.generateNewId(mother.id, mother);

    this.motherForm = mother.toForm();
    this.fatherForm = father.toForm();

    this.form = new FormGroup({
      mother: this.motherForm,
      father: this.fatherForm
    });
  }

  ngOnInit(): void {

  }

  submit(): void {
    if (! this.maySubmit()) return;

    this.person?.setMother(this.motherForm?.value);
    this.person?.setFather(this.fatherForm?.value);

    if (this.person)
      this.personSvc.updatePerson(this.person);

    this.close.emit();
  }

  maySubmit(): boolean {
    return this.form.touched && this.form.dirty && this.form.valid;
  }
}
