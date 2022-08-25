import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // userName:string="";
  // password:string="";

  constructor(private Auth:AuthService) { }

  ngOnInit(): void {
  }

  loginUser(event:any)
{
  event.preventDefault()
  const target=event.target
  const userName=target.querySelector('#uname').value
  const password=target.querySelector('#pass').value

  console.log(userName, password)

  this.Auth.getUserDetails(userName,password)
  
}

}
