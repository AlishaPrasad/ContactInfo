import { Component } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contact Information';
  contacts: string[];   
  constructor(private contactService: ContactService)  
  {  
    this.contacts = [];  
    this.populateItems();  
    }  
  
    populateItems()  
    {  
      this.contactService.getContactList().subscribe(res =>{  
        this.contacts = res;  
      })  
    }  
}
