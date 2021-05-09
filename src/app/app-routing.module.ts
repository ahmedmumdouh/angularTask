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
  {path:"", redirectTo:'usrs',pathMatch:'full'},
  {path:"usrs", component:UsersListComponent},
  {path:"usrs/:id", component:UsersDetialsComponent},
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
