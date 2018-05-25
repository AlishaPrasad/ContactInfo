import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from './../contact.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  contact: any;
  angForm: FormGroup;
  editTitle: 'Edit Contact';
  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService, private fb: FormBuilder) {
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

  updateContact(firstName, lastName, email, phoneNumber, status) {
    this.route.params.subscribe(params => {
    this.contactService.updateContact(params['id'], firstName, lastName, email, phoneNumber, status);
    this.router.navigate(['contacts']);
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contact = this.contactService.editContact(params['id']).subscribe(res => {
        this.contact = res;
      });
    });
  }
}
