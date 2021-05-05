import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetialsComponent } from './users-detials/users-detials.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsrComponent } from './usr/usr.component';


const routes:Routes = [
  // {path:"", component:HomeComponent},
  {path:"", redirectTo:'userss',pathMatch:'full'},
  {path:"userss", component:UsersListComponent},
  {path:"user", component:ProfileComponent},
  {path:"userss/:id", component:UsersDetialsComponent},
  {path:"**", component:NotFoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
