import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsersService } from '../services/users.service' ;

@Component({
  selector: 'app-not-found',
  template: `
    <p>
      not-found works! <br>
      <input type="button" class="btn btn-success" value="GoHome" (click)="Home()">
    </p>
  `,
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router, private myService:UsersService) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.router.navigate(['/']);
    // }, 2000);
    // this.myService.addToList(6);
  }

  Home(){
    this.router.navigate(['/']);
  }
  
}
