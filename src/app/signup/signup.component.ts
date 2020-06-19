import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {SailsService} from '../sailsBackEnd.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private _sails: SailsService) { }

  ngOnInit(): void {
  }
  signupNameControl = new FormControl('');
  signupPassControl = new FormControl('');
  onSubmit() {
    let username = this.signupNameControl.value
    let password = this.signupPassControl.value 
    this._sails.userSignup(username, password);
  }
}
