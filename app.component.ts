import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  // students:{name:string,desc:string,done:boolean}[]=[]

  tempstudent:any;


  receiveStudent(obj:{name:string,desc:string,done:boolean}){
    // console.log(obj);
    // this.students.push(obj);

    this.tempstudent = obj ;
  }

  
  
}
