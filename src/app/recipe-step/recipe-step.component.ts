import { Component, OnInit, } from '@angular/core';
import {SailsService} from '../sailsBackEnd.service';
@Component({
  selector: 'app-recipe-step',
  templateUrl: './recipe-step.component.html',
  styleUrls: ['./recipe-step.component.scss']
})
export class RecipeStepComponent implements OnInit {

  constructor(private _sails:SailsService ) { }

  ngOnInit(): void {
    this._sails.getCurrentUserData()
  }

}
