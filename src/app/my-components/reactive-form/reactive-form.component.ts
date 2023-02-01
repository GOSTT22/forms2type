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

  get fio() { return this.reactiveForm.get('fio'); }
  get password() { return this.reactiveForm.get('password'); }
  get delivery2() { return this.reactiveForm.get('delivery2'); }
  get disk() { return this.reactiveForm.get('disk'); }

  

  constructor() { }

  ngOnInit(): void {
    this.people = this.getPeopleData();
    this.reactiveForm = new FormGroup({
      fio: new FormControl(this.people.fio, Validators.required),
      password: new FormControl(this.people.password, Validators.required),
      delivery2: new FormControl(this.people.delivery2, Validators.required),
      disk: new FormControl(this.people.disk, Validators.required),
      courses: new FormControl(this.people.courses, Validators.required),
    });
  }

  onSubmit(): void {
    console.log(this.reactiveForm);
    console.log(this.reactiveForm.value);
  }

  getPeopleData(): IPeople {
    return { 
      fio: 'Ivanov',
      password: '11223344',
      delivery2: 'Михаила Бойчука 26',
      disk: "cd",
      courses: [{name: " Курсы по Photoshop", value: true},
                {name: " Курсы по Adobe Dreamweaver", value: false},
                {name: " Курсы по PHP", value: false}],

      delivery: [{name: " Срочная", value: "quick", selected: false},
                 {name: " Не срочная", value: "slow", selected: true}, 
                 {name: " Курьером", value: "cuirer", selected: false}],
    }
  }

}
