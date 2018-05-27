import { Injectable } from '@angular/core';
import { Contact } from './models/contact.model';

import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: Http) { }
contact: Contact;

  getContactList() {
    let uri = 'http://localhost:5000/api/contact';
    return this.http.get(uri)
      .pipe(map((res: Response) => {
        return res.json()
      }));
  }

  editContact(contactId) {
    const uri = 'http://localhost:5000/api/contact/' + contactId;
    return this.http.get(uri)
      .pipe(map(res => {
        return res.json();
      }));
  }

  updateContact(contact) {
    const uri = 'http://localhost:5000/api/contact';
    return this.http.post(uri, contact)
      .pipe(map(res => {
        return res;
      }));
  }

  deleteContact(contactId) {
    return this.http.delete('http://localhost:5000/api/contact/' + contactId)
      .pipe(map(res => {
        return res;
      }));
  }
}
