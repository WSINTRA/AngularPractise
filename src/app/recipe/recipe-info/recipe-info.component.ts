import { Component, OnInit, Input } from '@angular/core';
import { RecipeStep } from '../../recipeStep.service';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.scss'],
})
export class RecipeInfoComponent implements OnInit {

  constructor(private _recipeStep:RecipeStep) {}
  
  ngOnInit(): void {
  }
  
  getRecipeSteps(steps){
    this._recipeStep.setCurrentRecipeToView(steps)
  }
  
  @Input() element:{title:string, description:string, steps:any};
  
  // @Input() selection;
}
