import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly baseURL:string = "https://angular-users-task.herokuapp.com/users";

  myObservable:Observable<number>
  constructor(private myclient:HttpClient) {
    console.log('service const');
    this.myclient.request
    this.myObservable = new Observable((observer)=>{
      let number = 0 ;
      setInterval(()=>{
        observer.next(number++)
        if(number==5){
          observer.error('MAX')
        }

      },1000)
    })
  }

  getNumbers(){
    return this.myObservable ;
  }

  getUsres(){
    const headers = { 'content-type': 'application/json'}  
    let res = this.myclient.get(this.baseURL,{
      observe:'response','headers':headers
    });
    return res ;
  }

  setUser(userObj:User){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(userObj);
    let res = this.myclient.post(this.baseURL, body,{'headers':headers});
    return res ;
  }
  putUser(userObj:User,id:string){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(userObj);
    let res = this.myclient.put(`${this.baseURL}/${id}`, body,{'headers':headers});
    return res ;
  }
   
  getUserById(id:string){
    return this.myclient.get(`${this.baseURL}/${id}`);
  }

  delUserById(id:string){
    return this.myclient.delete(`${this.baseURL}/${id}`);
  }
  

}
