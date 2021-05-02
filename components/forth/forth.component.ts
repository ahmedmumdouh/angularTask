import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forth',
  templateUrl: './forth.component.html',
  styleUrls: ['./forth.component.css']
})
export class ForthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string=""
  age:number=1
  err:string=''
  todos:{name:string,age:number}[] = []
  add(){
    if( !this.name || !this.age){
      this.err="please input name requirerd"
      return
    }
    const todo={
      name:this.name,
      age:this.age
    }
    this.todos.push(todo)
    this.name = this.err = ""
    this.age=1
  }


}
