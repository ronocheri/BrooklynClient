import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from 'src/app/interfaces/contact';
import { AuthService } from 'src/app/services/auth.service';
import { CONTACTS } from '../../db';
import { RegisterUserComponent } from '../registerUser/register-user/register-user.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //contacts=CONTACTS;
  //contacts?:Array<IContact>;
  contacts?:Array<IContact>;
  selectedContact?: IContact;

    // dummyComponent = BlaComponent;

  constructor(private Auth:AuthService,private route: Router) { 

    Auth.getUserContacts().then((data => {
      this.contacts=data;
       //console.log(this.contacts);
 })); 

  }

  ngOnInit(): void {
  }

  onSelect(contact: IContact): void {
    this.selectedContact = contact;
  }

  
  // register()
  // {
  //   this.route.navigate(['/registerUser']);  
  // }

  // assignComponent(component: string) {
  //   if (component === "bla") this.dummyComponent = BlaComponent;
  //   else this.dummyComponent = RegisterUserComponent;
  // }

}
