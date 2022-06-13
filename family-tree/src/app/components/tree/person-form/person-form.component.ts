import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Person } from '../person.class';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {
  @Input() person = new Person("", "");

  @Output() close = new EventEmitter();

  form: FormGroup;

  constructor(private personSvc: PersonService) {
    this.form = this.person.toForm();
  }

  ngOnInit(): void {
  }

  submit(): void {
    if (! this.maySubmit()) return;

    this.person = this.person.fromForm(this.form);

    this.personSvc.updatePerson(this.person);

    this.close.emit();
  }

  maySubmit(): boolean {
    return this.form.touched && this.form.dirty && this.form.valid;
  }
}
