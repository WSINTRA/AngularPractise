import { Component, OnInit, Input } from '@angular/core';
import {SailsService} from '../sailsBackEnd.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  isLoggedIn : Observable<boolean>;
  constructor(private _sails:SailsService) {
    this.isLoggedIn = _sails.isLoggedIn();
  }
  logout(){
    this._sails.logout();
  }
 
  ngOnInit(): void {
  }
  switchLoginRegister(){
    this.loginRegister = !this.loginRegister;
  }
  loginRegister: boolean = false;

}
