import { Component,EventEmitter,Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ValidateUrl } from '../../shared/url.validator';

@Component({
  selector: 'app-register-rectactive',
  templateUrl: './register-rectactive.component.html',
  styleUrls: ['./register-rectactive.component.css']
})
export class RegisterRectactiveComponent implements OnInit {

  

  ngOnInit(): void {
  }



  @Output() studentRegister: EventEmitter<{name:string,desc:string,done:boolean}> = new EventEmitter();


  myForm:FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(14),Validators.minLength(2)]),
    desc: new FormControl('',[Validators.required,ValidateUrl])
  })

  
  register(){
    console.log(this.myForm);
    if(this.myForm.valid){
      this.studentRegister.emit(this.myForm.value)
      this.myForm.setValue({name:"",desc:""})
    }
  }

  get nameStatus(){
    return this.myForm.controls.name.valid ;
  }

  get descStatus(){
    return this.myForm.controls.desc.valid ;
  }

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
