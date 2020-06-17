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
  //Make this element accessible to children
  @Input() isLoggedIn : Observable<boolean>;
  ngOnInit(): void {
  }
  switchLoginRegister(){
    this.loginRegister = !this.loginRegister;
  }
  loginRegister: boolean = false;
}
