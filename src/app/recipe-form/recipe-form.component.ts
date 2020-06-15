import { Component, Input } from '@angular/core';
import { RecipeModel } from '../models/recipe.model';
import { Steps } from '../models/steps.model';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent {
  //Creation Mode
  createSteps: boolean = false;
  //Set types for a Recipe
  recipeTitle: string;
  recipeCreator: string;
  recipeDescription: string;
  allRecipes: any[] = [];
  //probably not the best way to do this but since I am just learning and trying to figure Angular out
  //make an object that will act as a temp holder for whatever the last recipe created was, then...
  //a new Recipe is initialized, open up the new steps form based on the createSteps boolean, then close, done
  editRecipe = {user: "", title:"", description:"",steps:[] };
  showSteps = []
  //when submitting a new recipe, set the values and push to the allRecipes array
  handleNewRecipe(userVal, titleVal, descriptionVal) {
    //Basic error checking to make sure recipe has atleast a title
    if (!titleVal) {
      return alert("Recipe must atleast have a title")
    }
    //Create a new recipe, push it onto the allRecipe array and change mode for recipe editing
    //new Recipe should have User, Title, Description, Steps array
    let currentRecipe = new RecipeModel(userVal, titleVal, descriptionVal, [])
    this.allRecipes.push(currentRecipe)
    this.editRecipe = currentRecipe;
    this.createSteps = true;
  }
  //Set types for new Steps
  stepTitle: string
  stepDescription: string
  stepImageUrl: string
  stepVideoUrl: string
  //Handle adding new steps once a recipe has been initialised
  //Each new step is added to the current editRecipe steps array
  handleNewStep(stepTitleVal, stepDescriptionVal, stepImageUrlVal, stepVideoUrlVal ){
    if (!stepTitleVal) {
      return alert("Step must atleast have a title")
    }
    let newStep = new Steps(stepTitleVal, stepDescriptionVal, stepImageUrlVal, stepVideoUrlVal)
    this.editRecipe.steps.push(newStep)
    this.showSteps = this.editRecipe.steps
    //Once submitted reset all variables
    this.stepTitle = "";
    this.stepDescription = "";
    this.stepImageUrl = "";
    this.stepVideoUrl = "";
  }
  //When finished return back to add recipe form
  handleFinishedSteps(){
    this.createSteps = false
    //reset the showSteps array and the previous recipe details
    this.showSteps = []
    this.recipeTitle = "";
    this.recipeCreator = "";
    this.recipeDescription = "";
  }
}