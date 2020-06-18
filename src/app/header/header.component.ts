import { Component, OnInit } from '@angular/core';
import {SailsService} from '../sailsBackEnd.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _sails:SailsService) {
  }
  logout(){
    this._sails.logout();
  }
  ngOnInit(): void {
  }
  collapsed = true;
}
