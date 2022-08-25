import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  //constructor() { }

  constructor(private route: Router,private Auth:AuthService) { }
  ngOnInit(): void {
  }

    register(event:any)
  {
    event.preventDefault()
    const target=event.target
    const userName=target.querySelector('#uname').value
    const password=target.querySelector('#pass').value
  
    console.log(userName, password)
  
    this.Auth.registerUser(userName,password)

    // this.route.navigate(['/contactChosen']);  
  }

}
