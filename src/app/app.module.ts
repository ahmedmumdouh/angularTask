import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ThirdComponent } from './components/third/third.component';
import { ForthComponent } from './components/forth/forth.component';
import { RegisterComponent } from './register/register.component';
import { StudentsComponent } from './students/students.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterRectactiveComponent } from './register-rectactive/register-rectactive.component';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetialsComponent } from './users-detials/users-detials.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { UsersService } from './services/users.service';
import { UserComponent } from './user/user.component';
import { CustomPipe } from './pipes/custom.pipe';
import { CustomDirective } from './directives/custom.directive';
import { UsrComponent } from './usr/usr.component';
// const routes:Routes = [
//   {path:"", component:HomeComponent},
//   {path:"users", component:UsersListComponent},
//   {path:"profile", component:ProfileComponent},
//   {path:"users/:id", component:UsersDetialsComponent},
//   {path:"**", component:NotFoundComponent},
// ]




@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ForthComponent,
    RegisterComponent,
    StudentsComponent,
    RegisterRectactiveComponent,
    UserComponent,
    CustomPipe,
    CustomDirective,
    UsrComponent,
    HomeComponent,
    UsersListComponent,
    UsersDetialsComponent,
    ProfileComponent,
    NotFoundComponent
    // import main building blocks in angular
    // 1- components
    // 2- directives
    // 3- pipes
  ],
  imports: [

  BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    // RouterModule.forRoot(routes),
    AppRoutingModule
    // other modules
    // 1- custom modules
    // 2- built-in modules

  ],
  providers: [/** services **/UsersService],
  bootstrap: [AppComponent/** root component to apply bootstrap */]
})
export class AppModule { }





/** there is root component that must be included */
