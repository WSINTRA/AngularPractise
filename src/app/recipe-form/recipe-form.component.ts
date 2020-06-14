import { Component, Input } from '@angular/core';
import { RecipeModel } from '../models/recipe.model';
import { NewRecipe } from '../recipe.service';
import { RecipeStep } from '../recipeStep.service'

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent {
  
  // constructor(public currentRecipe: NewRecipe){ }
  recipeTitle: string;
  recipeCreator: string;
  recipeDescription: string;
  recipeSteps:any[] = [];
  currentRecipe = new RecipeModel(this.recipeTitle="",this.recipeCreator="", this.recipeDescription="", this.recipeSteps )
  
  allRecipes: any[] = [];
  handleNewRecipe(userVal, titleVal, descriptionVal ){
    this.currentRecipe.user = userVal;
    this.currentRecipe.title = titleVal;
    this.currentRecipe.description = descriptionVal;
    this.allRecipes.push(this.currentRecipe)
  }



}


// import { Component, Input } from "@angular/core";
// import { DiscountService } from "./discount.service";
// @Component({
//   selector: "paDiscountDisplay",
//   template: `<div class="bg-info text-white p-2">
//                 The discount is {{discounter.discount}}
//                </div>`
// })
// export class PaDiscountDisplayComponent {
//   constructor(public discounter: DiscountService) { }
// }