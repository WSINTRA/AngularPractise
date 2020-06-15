import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  switchLoginRegister(){
    this.loginRegister = !this.loginRegister;
  }
  loginRegister: boolean = false;

}
