import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'forms',
    loadChildren: () => import('./my-components/myform.module').then(m => m.MyFormModule)
  },
  {
    path: '',
    redirectTo: 'forms',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
