import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { Contact } from 'src/app/shared/models/Contact'; // here is the root to the model file

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  public confirmed = false;
  public contact: Contact; // instance of the entity contact.
  public contactForm: FormGroup; // instance of formControl.

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      uname: new FormControl('', [Validators.required, Validators.minLength(4),]),
      email: new FormControl('', [Validators.required,]),
      msg: new FormControl('', [Validators.required, Validators.minLength(20),]),
    })

  }
    // convenience getter for easy access to form fields
    get uname(){ return this.contactForm.get('uname');}
    get msg(){ return this.contactForm.get('msg');}
    get email(){ return this.contactForm.get('email');}

  onSubmit(){
      console.log('the form submit succefully!!! thanks', this.contactForm.value);
      this.contactForm.reset(); //this is to reset the form to initial.
    }

}
