import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact.model';

@Component({
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
  contacts: Contact[];

  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService) { 
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
    this.contactService.deleteContact(contactId)
        .subscribe(res=>{
          this.getContacts();
        }
      );
  }

}
