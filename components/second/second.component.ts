import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  todotitle:string = "";

  addTodo(){
    console.log(this.todotitle);
    const todo ={
      title:this.todotitle,
      done:false
    }
  }

}
