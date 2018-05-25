import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { IContact } from '../models/contact.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  contacts: any;

  constructor(private contactService: ContactService) { 
  }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(){
    this.contactService.getContactList().subscribe(res =>{  
      this.contacts = res;  
    });  
  }

  deleteContact(contactId) {
    this.contactService.deleteContact(contactId).subscribe(res => {
      console.log('Deleted');
    });
}

}
