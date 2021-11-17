import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';

const routes: Routes = [
  {path:'', component: EmpDetailsComponent},
  {path:'login', component: EmpLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
