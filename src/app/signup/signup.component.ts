import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  signupNameControl = new FormControl('');
  signupPassControl = new FormControl('');
  onSubmit() {
    //make this submit the values to the backend
    console.log(this.signupNameControl.value, this.signupPassControl);
  }
}
