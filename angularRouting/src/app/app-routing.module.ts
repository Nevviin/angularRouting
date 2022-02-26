import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './User/user-details/user-details.component';
import {LoginComponent} from './Login/login/login.component';

const routes: Routes = [
  {path:"user-details", component:UserDetailsComponent}
  , {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
