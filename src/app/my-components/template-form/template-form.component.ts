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
    console.log(templateForm);
    // const fio = templateForm.controls['fio'].value;
    // const password = templateForm.controls['password'].value;
    // const delivery2 = templateForm.controls['delivery2'].value;
    // const disk = templateForm.controls['disk'].value;
    // const courses = templateForm.controls['courses'].value
    // const delivery = templateForm.controls['delivery'].value

    // const data = {
    //   fio,
    //   password,
    //   delivery2,
    //   disk,
    //   courses,
    //   delivery
    // }

    const data = templateForm.value;

    console.log(data);

  }

  getPeopleData(): IPeople {
    return {
       fio: 'Ivanov',
        password: '11223344',
        delivery2: 'Михаила Бойчука 26',
        disk: "dvd",
        courses: [{name: " Курсы по Photoshop", value: true},
                  {name: " Курсы по Adobe Dreamweaver", value: true},
                  {name: " Курсы по PHP", value: false}],

        delivery: [{name: " Срочная", value: "quick", selected: false},
                  {name: " Не срочная", value: "slow", selected: true},
                  {name: " Курьером", value: "cuirer", selected: false}],
          }

  }

}
