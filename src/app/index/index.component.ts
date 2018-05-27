import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
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
