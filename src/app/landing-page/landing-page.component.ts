import { Component, OnInit, Input } from '@angular/core';
import {SailsService} from '../sailsBackEnd.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  
  constructor(private _sails:SailsService) {
    this.isLoggedIn = _sails.isLoggedIn();
  }
  
  isLoggedIn : Observable<boolean>;
  ngOnInit(): void {
    if(localStorage.getItem('access_token')){
      //calls the fetch to the backend if user is already logged in with token
      this._sails.getCurrentUserData()
    }
  }
  switchLoginRegister(){
    this.loginRegister = !this.loginRegister;
  }
  loginRegister: boolean = false;
  
}
