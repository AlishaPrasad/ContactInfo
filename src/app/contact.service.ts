import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from "rxjs/operators";
import { Contact } from './models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: Http) { }
  contact: Contact;
  
  getContactList() {
    const uri = 'http://localhost:54460/api/contact';
    return this.http.get(uri)
      .pipe(map((res: Response) => {
        return res.json()
      }));
  }

  editContact(contactId) {
    const uri = 'http://localhost:54460/api/contact/' + contactId;
    return this.http.get(uri)
      .pipe(map(res => {
        return res.json();
      }));
  }

  updateContact(contact) {
    const uri = 'http://localhost:54460/api/contact';
    return this.http.post(uri, contact)
      .pipe(map(res => {
        return res;
      }));
  }

  deleteContact(contactId) {
    return this.http.delete('http://localhost:54460/api/contact/' + contactId)
      .pipe(map(res => {
        return res;
      }));
  }
}
