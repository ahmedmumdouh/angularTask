import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'my-first-project';
  // students:{name:string,desc:string,done:boolean}[]=[]

  tempstudent:any;


  receiveStudent(obj:{name:string,desc:string,done:boolean}){
    // console.log(obj);
    // this.students.push(obj);

    this.tempstudent = obj ;
  }
}
