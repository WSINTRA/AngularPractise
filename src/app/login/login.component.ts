import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {SailsService} from '../sailsBackEnd.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private _sails:SailsService) {
  }

  ngOnInit(): void {
  }
  loginNameControl = new FormControl('');
  loginPassControl = new FormControl('');
  
onSubmit(){
    let username = this.loginNameControl.value
    let password = this.loginPassControl.value 
    this._sails.userLogin(username, password);
  }
}
