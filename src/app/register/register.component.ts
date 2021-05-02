import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import * as EventEmitter from 'node:events';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
}) 
export class RegisterComponent implements OnInit {



  ngOnInit(): void {
  }
  name:string =""
  desc:string =""
  
  @Output() studentRegister: EventEmitter<{name:string,desc:string,done:boolean}> = new EventEmitter();


  register(myForm:any){
    const student ={
      name:myForm.value.name,
      desc:myForm.value.desc,
      done:false
    }
    if(myForm.valid){
      // .emit
      this.studentRegister.emit(student);
      this.name=""
      this.desc=""
    }
    console.log(myForm.value);  // .valid  .controls
  }

  // register(name:string, age:number){

  // }

    // register(myForm:any){
  //   console.log(myForm.value);  // .valid  .controls
  //   const student ={
  //     name:this.name,
  //     age:this.age
  //   }
  // }

  closeModal: string="";
  
  constructor(private modalService: NgbModal) {}
    
  triggerModal(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
