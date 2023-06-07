import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  acno:any  //these variables are used to store the values
  uname:any
  psw:any
  cpsw:any  
constructor( private ds :DataService,private rout:Router){ }
ngOnInit(): void{

}
signup(){
  var acno=this.acno
  var uname=this.uname
  var psw=this.psw
  var cpsw=this.cpsw
 
  if(psw==cpsw){
this.ds.register(acno,uname,psw).subscribe((result:any)=>{
  alert(result.message);
this.rout.navigateByUrl("")
},
result=>{
  alert(result.error.message)
  
}
  )

  }
  else{
    alert("password doen't match")
  }
  
}
}

  
