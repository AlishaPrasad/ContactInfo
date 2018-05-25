import { Injectable } from '@angular/core';
import { IContact } from './models/contact.model';

import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: Http) { }

  addContact(firstName, lastName, email, phoneNumber, status) {
    const uri = 'http://localhost:54460/api/contact';
    const obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      status: status
    };
    this.http.post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  getContactList() {
    let uri = 'http://localhost:54460/api/contact';
    return this.http.get(uri)
      .pipe(map((res: Response) => {
        return res.json()
      }));
  }

  editContact(contactId) {
    const uri = 'http://localhost:54460/api/contact/' + contactId;
    return this.http.get(uri)
      .pipe(map((res: any) => {
        return res.json();
      }));
  }

  updateContact(contactId, firstName, lastName, email, phoneNumber, status) {
    const uri = 'http://localhost:54460/api/contact/update';
    const obj = {
      contactId: contactId,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      status: status
    };
    return this.http.post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteContact(contactId) {
    return this.http.delete('http://localhost:54460/api/contact/' + contactId)
      .pipe(map(res =>
        res.json()
      ));
  }
}
