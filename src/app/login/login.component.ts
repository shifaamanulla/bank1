import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
data="happy banking with us"
pdata="enter acco no"

constructor(){}
ngOnInit():void{

}
login(a:any){
  console.log(a.value);
  
  alert('login clicked')
}
accnoChange(event:any){
  console.log(event.target.value);
  
}
}