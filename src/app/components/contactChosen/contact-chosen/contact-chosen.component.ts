import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from 'src/app/interfaces/contact';

@Component({
  selector: 'app-contact-chosen',
  templateUrl: './contact-chosen.component.html',
  styleUrls: ['./contact-chosen.component.css']
})
export class ContactChosenComponent implements OnInit {

selectedContact?: IContact;

// dummyComponent = BlaComponent;

constructor(private route: Router) { }

ngOnInit(): void {
}

onSelect(contact: IContact): void {
this.selectedContact = contact;
}

}
