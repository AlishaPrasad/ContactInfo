import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from "rxjs/operators";
import { environment } from '../environments/environment';
import { Contact } from './models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: Http) {
    this.rootUri = environment.url
  }
  contact: Contact;
  rootUri: string;

  getContactList() {
    const uri = this.rootUri + '/contact';
    return this.http.get(uri)
      .pipe(map((res: Response) => {
        return res.json()
      }));
  }

  editContact(contactId) {
    const uri = this.rootUri + '/contact/' + contactId;
    return this.http.get(uri)
      .pipe(map(res => {
        return res.json();
      }));
  }

  updateContact(contact) {
    const uri = this.rootUri + '/contact';
    return this.http.post(uri, contact)
      .pipe(map(res => {
        return res;
      }));
  }

  deleteContact(contactId) {
    return this.http.delete(this.rootUri + '/contact/' + contactId)
      .pipe(map(res => {
        return res;
      }));
  }
}
