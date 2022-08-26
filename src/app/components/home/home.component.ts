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
   strToSort:string='firstName'
   orderToSort:string='asc'
  contacts?:Array<IContact>;
  selectedContact?: IContact;
  public pageSlice?:Array<IContact>=this.contacts?.slice(0,10);

    // dummyComponent = BlaComponent;

  constructor(private Auth:AuthService,private route: Router) { 

    Auth.getUserContacts().then((data => {
      this.contacts=data;
      this.pageSlice=this.contacts;

      // if(this.pageSlice!=null)
      //   this.pageSlice=this.sortList(this.pageSlice,'asc','firstName')

      this.pageSlice?.sort((a, b) => {
        let aLC: string = a.firstName.toLowerCase();
        let bLC: string = b.firstName.toLowerCase();
        return aLC < bLC ? -1 : (aLC > bLC ? 1 : 0);
    });
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
  
  onSelectSortBtn(): void {
    console.log(this.orderToSort+" "+this.strToSort)
    if(this.pageSlice!=null)
      this.pageSlice=this.sortList(this.pageSlice,this.orderToSort,this.strToSort)
  }

  //function for dynamic sort
    sortList(value: any[], sortOrder: string = 'asc', sortKey?: string): any {
    sortOrder = sortOrder && (sortOrder.toLowerCase() as any);

    if (!value || (sortOrder !== 'asc' && sortOrder !== 'desc')) return value;

    let numberArray = [];
    let stringArray = [];

    if (!sortKey) {
      numberArray = value.filter(item => typeof item === 'number').sort();
      stringArray = value.filter(item => typeof item === 'string').sort();
    } else {
      numberArray = value.filter(item => typeof item[sortKey] === 'number').sort((a, b) => a[sortKey] - b[sortKey]);
      stringArray = value
        .filter(item => typeof item[sortKey] === 'string')
        .sort((a, b) => {
          if (a[sortKey] < b[sortKey]) return -1;
          else if (a[sortKey] > b[sortKey]) return 1;
          else return 0;
        });
    }
    const sorted = numberArray.concat(stringArray);
    return sortOrder === 'asc' ? sorted : sorted.reverse();
  }

  //on change category
  onSelectedCategory(categotySort:string): void {
    console.log(categotySort)
		this.strToSort = categotySort;
  }


   //on change order
   onSelectedOrder(orderSort:string): void {
    console.log(orderSort)
		this.orderToSort = orderSort;
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
