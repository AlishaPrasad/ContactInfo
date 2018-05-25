import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ContactService }from '../contact.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  title = 'Add Contact';
  angForm: FormGroup;
  constructor(private contactService: ContactService, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      email: ['', Validators.required ],
      phonenumber: ['', Validators.required ],
      status: ['', Validators.required ]
   });
  }

  addContact(firstname, lastname, email, phonenumber, status) {
      this.contactService.addContact(firstname, lastname, email, phonenumber, status);
  }
  
  ngOnInit() {
  }

}
