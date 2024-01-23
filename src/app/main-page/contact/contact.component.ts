import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

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
      to_name: ['admin'],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }
  get firstGroup() {
    return this.myForm.controls;
  }
  async onShowData() {
    this.isSubmitted = true;
    if(this.myForm.valid){
      this.isSubmitted = false;
      console.log("function call",this.myForm);
      const { name, email, message } = this.myForm.value;
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      // const formData = `Name : ${name}\nEmail : ${email}\nMessage : ${message}`;
      // alert(formData);

      emailjs.init('aXVZEYif-cXX4vkrM');
      let response = await emailjs.send("service_i9j2l78","template_wxt9l3a",{
        name: this.myForm.value.name,
        to_name: this.myForm.value.to_name,
        email: this.myForm.value.email,
        message: this.myForm.value.message,
      });
      alert('Message Send');
    }
    this.myForm.reset();
    // this.showModal = true;

    

  }

  // async send() {
  //   emailjs.init('aXVZEYif-cXX4vkrM');
  //   let response = await emailjs.send("service_i9j2l78","template_wxt9l3a",{
  //     name: this.myForm.value.name,
  //     to_name: this.myForm.value.to_name,
  //     email: this.myForm.value.email,
  //     message: this.myForm.value.message,
  //   });
  //   alert('Message Send');
  //   this.myForm.reset;
  // }

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
