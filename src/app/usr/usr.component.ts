import { Component,Input, OnInit } from '@angular/core';
import {User} from '../models/user';

@Component({
  selector: 'app-usr',
  templateUrl: './usr.component.html',
  styleUrls: ['./usr.component.css']
})
export class UsrComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('userprop') user:User = {
    id:'',
    name:'',
    age:NaN,
    city:'',
    email:''

  }
}
