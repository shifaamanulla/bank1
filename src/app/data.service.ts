import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  navigateByUrl(arg0: string) {
    throw new Error('Method not implemented.');
  }
  //dependency injection
  constructor( private http:HttpClient) {}
  //api to register
    register(acno:any,uname:any,psw:any){
      const bodyData={
        acno,
        uname,
        psw
      }
      return this.http.post('http://localhost:3001/register',bodyData)
    }
    //api to login
   login(acno:any,psw:any){
    const body={
    acno,
    psw
    }
    return this.http.post('http://localhost:3001/login',body)
   }
 
  }

