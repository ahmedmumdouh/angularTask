import { Component, Input ,OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router' ;
import {UsersService } from '../services/users.service' ;
import {User} from '../models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users-detials',
  templateUrl: './users-detials.component.html',
  styles: [
  ]
})
export class UsersDetialsComponent implements OnInit {

  constructor(private router: Router,private myActivatedRoute:ActivatedRoute,private myService:UsersService,private modalService: NgbModal) {
    console.log(myActivatedRoute.snapshot.params.id) ;
    this.id = myActivatedRoute.snapshot.params.id;
    this.user = {
                name:'',
                email:'',
                city:'',
                age:18
            }
   }
   id:string ;
   subscriber:any
   user:any
  ngOnInit(): void {
    this.getUser();
  }


  getUser(){
    this.myService.getUserById(this.id)
    .subscribe({
      next:(user)=>{
        this.user = user as User ; 
        this.myForm = new FormGroup({
          name: new FormControl(this.user.name , [Validators.required, Validators.maxLength(50),Validators.minLength(2)]),
          email: new FormControl(this.user.email,[Validators.required,Validators.email]),
          city: new FormControl(this.user.city,[Validators.required]),
          age: new FormControl(this.user.age,[Validators.required,Validators.min(18)])
      
        })
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  deleteUser(){
    if(window.confirm('Do you want to delete this user ?')){

      this.myService.delUserById(this.id)
      .subscribe({
        next:(res)=>{
          this.Home();
        },
        error:(err)=>{
          console.log(err);
        }
      })
    } 
  }

  EditUser(){

  }

  Home(){
    this.router.navigate(['/']);
  }



  

  myForm:FormGroup = new FormGroup({
    name: new FormControl('' , [Validators.required, Validators.maxLength(50),Validators.minLength(2)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    city: new FormControl('',[Validators.required]),
    age: new FormControl(18,[Validators.required,Validators.min(18)])

  })

  
  editUser(){
    console.log(this.myForm.value);
    if(this.myForm.valid){
      // this.studentRegister.emit(this.myForm.value)
      // this.myForm.setValue({name:"",desc:""})
      this.subscriber = this.myService.putUser(this.myForm.value,this.id)
      .subscribe({
        next:(res)=>{
          console.log(res);
          this.getUser() ;
          this.modalService.dismissAll();
        },
        error:(err)=>{
          console.log(err);
        }
      });
      this.modalService.dismissAll();
    }

  }

  get nameStatus(){
    return this.myForm.controls.name.valid ;
  }

  get emailStatus(){
    return this.myForm.controls.email.valid ;
  }
  get ageStatus(){
    return this.myForm.controls.age.valid ;
  }
  get cityStatus(){
    return this.myForm.controls.city.valid ;
  }
 

  closeModal: string="";
  
    
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
