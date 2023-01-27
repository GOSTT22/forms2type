import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPeople } from '../people.interface';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  people: IPeople;
  reactiveForm: FormGroup;

  get name() { return this.reactiveForm.get('name'); }
  get age() { return this.reactiveForm.get('age'); }

  constructor() { }

  ngOnInit(): void {
    this.people = this.getPeopleData();
    this.reactiveForm = new FormGroup({
      name: new FormControl(this.people.name, Validators.required),
      age: new FormControl(this.people.age, Validators.required),
      phone: new FormControl(this.people.phone),
      children: new FormControl(this.people.children)
    });
  }

  onSubmit(): void {
    console.log(this.reactiveForm);
    console.log(this.reactiveForm.value);
  }

  getPeopleData(): IPeople {
    return { name: 'Ivanov', age: 33, phone: '095 59 030 95', children: true }
  }

}
