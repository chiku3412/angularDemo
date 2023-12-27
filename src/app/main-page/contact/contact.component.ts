import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  myForm: FormGroup;
  isSubmitted: boolean = false;
  showModal = false;

  // using form control name
  constructor(private contactForm: FormBuilder) {
    this.myForm = this.contactForm.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }
  get firstGroup() {
    return this.myForm.controls;
  }
  onShowData(): void {
    this.isSubmitted = true;
    if(this.myForm.valid){
      this.isSubmitted = false;
      console.log("function call",this.myForm);
      const { name, email, message } = this.myForm.value;
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
    }
    // this.myForm.reset();
    this.showModal = true;
  }

  // using id
  // onSubmit(): void {
  //   console.log("function call");
  //   const name = this.userName;
  //   const email = this.userEmail;
  //   const message = this.userMessage;

  //   console.log(name, email, message);
  // }

  closeModal() {
    this.showModal = false;
  }
}
