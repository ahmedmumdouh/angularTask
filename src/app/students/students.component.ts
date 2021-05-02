import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
}) 
export class StudentsComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges):void {
    if(!changes.student.firstChange){
      this.list.push(this.student);
    }
  }
  @Input('prop') student:any ; 
  //  set Student(value:any){
  //   console.log(value);
  //   this.student = value ;
  //   if(value){
  //     this.list.push(value);
  //   }
  // }
   list:{name:string,desc:string,done:boolean}[]=[]
  
  compeleted:number = 0 
  
  completeTask(i:any){
    this.list[i].done= this.list[i].done ? false : true ;
    if(this.list[i].done){
      this.compeleted++
    }else{
      this.compeleted--
    }
    
    // this.totalTasks = this.list.length
    console.log(this.list.length)


    // @Input()

  }
}
