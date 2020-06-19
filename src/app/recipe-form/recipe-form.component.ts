import { Component, } from '@angular/core';
import {NewRecipe} from '../recipe.service';
import {SailsService} from '../sailsBackEnd.service';
@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'],
})

export class RecipeFormComponent {

  constructor(private _newRecipe:NewRecipe, private _sails:SailsService ) {
   }

  ngOnInit() {
    this._sails.getCurrentUserData()
  } 
  //Creation Mode
  createSteps: boolean = false;
  //Set types for a Recipe
  recipeTitle: string;
  recipeCreator: string;
  recipeDescription: string;
  editRecipe = { title:"", description:"",steps:[] };
  //this array must hold newly added Steps
  showSteps = []
  stepTitle: string
  stepDescription: string
  stepImageUrl: string
  stepVideoUrl: string
  stepTime: number
 
  newStepsMethod(stepTitleVal, stepDescriptionVal,stepImageUrlVal,stepVideoUrlVal, stepTimeVal){
    if (!stepTitleVal) {
      return alert("Step must atleast have a title")
    }
    const currentSteps = this._newRecipe.addStepsToRecipe(stepTitleVal, stepDescriptionVal, stepImageUrlVal, stepVideoUrlVal,stepTimeVal,);
    this.editRecipe.steps.push(currentSteps)
    //This is to list steps are you are creating them
    this.showSteps = this.editRecipe.steps
        //Once submitted reset all variables
        this.stepTitle = "";
        this.stepDescription = "";
        this.stepTime = null;
        this.stepImageUrl = "";
        this.stepVideoUrl = "";
  }
  newRecipeMethod(
    recipeTitle: string,
    recipeDescription: string,
    ){
      if (!recipeTitle) {
        return alert("Recipe must atleast have a title")
      }
    const currentRecipe = this._newRecipe.createRecipe(recipeTitle, recipeDescription,);
    // this.allRecipes.push(currentRecipe)
    this.createSteps = true;
    this.editRecipe = currentRecipe;
  }

  handleFinishedSteps(){
    this.createSteps = false
    //reset the showSteps array and the previous recipe details
    //Submit the editRecipe to the backend
    this.showSteps = []
    this.recipeTitle = "";
    this.recipeCreator = "";
    this.recipeDescription = "";
    let recipe = JSON.stringify(this.editRecipe)
    this._sails.saveNewRecipesToUser(recipe)
  }
}