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
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', Validators.required ],
      phoneNumber: ['', Validators.required ],
      status: ['', Validators.required ]
   });
  }

  addContact(firstName, lastName, email, phoneNumber, status) {
      this.contactService.addContact(firstName, lastName, email, phoneNumber, status);
  }
  
  ngOnInit() {
  }

}
