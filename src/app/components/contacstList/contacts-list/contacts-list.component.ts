import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONTACTS } from 'src/app/db';
import { IContact } from 'src/app/interfaces/contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

contacts: IContact[]=CONTACTS

  // contacts: IContact[]=CONTACTS.sort((a, b) => {
  //   const nameA = a.firstName.toUpperCase(); // ignore upper and lowercase
  //   const nameB = b.firstName.toUpperCase(); // ignore upper and lowercase
  //   if (nameA < nameB) {
  //     return -1;
  //   }
  //   if (nameA > nameB) {
  //     return 1;
  //   }
  
  //   // names must be equal
  //   return 0;
  // });

  selectedContact?: IContact;

    // dummyComponent = BlaComponent;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onSelect(contact: IContact): void {
    this.selectedContact = contact;
  }
}
