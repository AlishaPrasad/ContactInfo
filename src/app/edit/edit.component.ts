import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from './../contact.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  contact: Contact;
  angForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService, private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', [Validators.required , Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      phoneNumber: ['', Validators.required ],
      status: ['', Validators.required ]
   });
  }

  updateContact() {
    this.route.params.subscribe(params => {
    this.contactService.updateContact(this.contact)
      .subscribe(res=> {
        this.router.navigate(['contacts']);}
      )
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contactService.editContact(params['id']).subscribe(res => {
        this.contact = res;
      });
    });
  }
}
