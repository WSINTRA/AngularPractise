import { Component, OnInit, Input } from '@angular/core';
import { SailsService } from '../sailsBackEnd.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor(private _sails:SailsService) {
    this.currentUserWatch = _sails.userData()
   }

  ngOnInit(): void {
    this.currentUserWatch.subscribe(user=> this.currentUser = user)
  }
  currentUserWatch;
  currentUser;


}
