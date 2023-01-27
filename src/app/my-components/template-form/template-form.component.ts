import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IPeople } from '../people.interface';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  people: IPeople;

  constructor() { }

  ngOnInit(): void {
    this.people = this.getPeopleData();
  }

  onSubmit(templateForm: NgForm): void {

    const name = templateForm.controls['name'].value;
    const age = templateForm.controls['age'].value;
    const phone = templateForm.controls['phone'].value;
    const children = templateForm.controls['children'].value;

    const data = {
      name,
      age,
      phone,
      children
    }

    console.log(data);

  }

  getPeopleData(): IPeople {
    return { name: 'Ivanov', age: 33, phone: '095 59 030 95', children: true }
  }

}
