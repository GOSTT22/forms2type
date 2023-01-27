import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routing: Routes = [
    {
        path: '',
        component: FormsComponent,
        children: [
            {
                path: 'template',
                component: TemplateFormComponent
            },
            {
                path: 'reactive',
                component: ReactiveFormComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        FormsComponent,
        TemplateFormComponent,
        ReactiveFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routing)
    ],
    providers: [],
})
export class MyFormModule { }
