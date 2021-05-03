import { Component,OnDestroy ,OnInit } from '@angular/core';
import {UsersService } from '../services/users.service' ;
import {User} from '../models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styles: [
  ],  
})
export class UsersListComponent implements OnInit , OnDestroy {

  constructor(private myService:UsersService,private modalService: NgbModal) { }

  subscriber:any[]=[]
  users:User[] = []
  filteredUsers:User[] = []
  // userSearchName:string=''


  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.subscriber.push( this.myService.getUsres()
    .subscribe({
      next:(res)=>{
        console.log(res);
        this.users = res.body as User[]
        this.filteredUsers = this.users

      },
      error:(err)=>{
        console.log(err);
      }
    }) )
  }

  ngOnDestroy():void{
    this.subscriber.map((item)=> item.unsubscribe() );
  }

  onSearch(e:any){
    
      if(e.target.value == ''){
          this.filteredUsers = this.users ;
          return ;
      }
          
      this.filteredUsers = this.users.filter((user) => 
          user.name.toLowerCase().includes(e.target.value)
      );    
  }




  myForm:FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50),Validators.minLength(2)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    city: new FormControl('',[Validators.required]),
    age: new FormControl(18,[Validators.required,Validators.min(18)])

  })

  
  register(){
    console.log(this.myForm);
    if(this.myForm.valid){
      // this.studentRegister.emit(this.myForm.value)
      // this.myForm.setValue({name:"",desc:""})
      this.subscriber.push( this.myService.setUser(this.myForm.value)
      .subscribe({
        next:(res)=>{
          console.log(res);
          this.getAllUsers();
          this.modalService.dismissAll();
        },
        error:(err)=>{
          console.log(err);
        }
      }) )
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
