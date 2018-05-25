import { Injectable } from '@angular/core';
import { Contact } from './models/contact.model';

import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  selectedContact : Contact;
  contactList : Contact[];
  constructor(private http : Http) { }
 
  addContact(firstname, lastname, email, phonenumber, status) {
    const uri = 'http://localhost:5000/contact/add';
    const obj = {
      firstname: firstname, 
      lastname: lastname,
      email: email, 
      phonenumber: phonenumber, 
      status: status
    };
    this.http.post(uri, obj)
        .subscribe(res => console.log('Done'));
  }

  postContact(emp : Contact){
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:28750/api/Contact',body,requestOptions).pipe(map(x => x.json()));
  }
 
  putContact(id, emp) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:28750/api/Contact/' + id,
      body,
      requestOptions).pipe(map(res => res.json()));
  }
 
  getContactList(){
        let apiUrl = 'http://localhost:5000/api/contact';  
        return this.http.get(apiUrl)  
                   .pipe(map((res: Response) => {return res.json()  
        }));  
  }
 
  deleteContact(id: number) {
    return this.http.delete('http://localhost:28750/api/Contact/' + id).pipe(map(res => res.json()));
  }
}
