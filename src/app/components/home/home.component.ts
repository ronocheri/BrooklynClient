import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { IContact } from 'src/app/interfaces/contact';
import { AuthService } from 'src/app/services/auth.service';
// import { CONTACTS } from '../../db';
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
  public pageSlice?:Array<IContact>=this.contacts?.slice(0,10);

    // dummyComponent = BlaComponent;

  constructor(private Auth:AuthService,private route: Router) { 

    Auth.getUserContacts().then((data => {
      this.contacts=data;
      this.pageSlice=this.contacts;
      this.pageSlice?.sort()
       //console.log(this.contacts);
 })); 

  }

  ngOnInit(): void {
  }

  onSelect(contact: IContact): void {
    this.selectedContact = contact;
  }

  onPageChange(event:PageEvent)
  {
    const stIndex=event.pageIndex*event.pageSize;
    let endIndex=stIndex+event.pageSize

    if(this.contacts!=null)
      if(endIndex>this.contacts?.length)
        endIndex=this.contacts?.length
    this.pageSlice=this.contacts?.slice(stIndex,endIndex)
    console.log("endIndex: "+endIndex)
    // if(endIndex>)
    // {
      
    // }
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
