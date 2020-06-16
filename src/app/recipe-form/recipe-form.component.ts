import { Component, Input } from '@angular/core';
import { RecipeModel } from '../models/recipe.model';
import { Steps } from '../models/steps.model';
import {NewRecipe} from '../recipe.service';
import {SailsService} from '../sailsBackEnd.service';
import { Observable } from "rxjs";
@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})

export class RecipeFormComponent {


  constructor(private _newRecipe:NewRecipe, private _sails:SailsService ) {
    this.allUserRecipes = _sails.userData()
   }
   getsUserDataAndRecipes() {
    this._sails.userData().subscribe(user => this.loggedInUserDetails = user);
 } 
 ngOnInit() {
  this.getsUserDataAndRecipes();
  this.getRecipes();
} 
  loggedInUserDetails: any;
  getRecipes(){
    this._sails.getCurrentUserData();
    // console.log(this.loggedInUserDetails, "This should be data")
  }
  allUserRecipes : Observable<any>;
  //Creation Mode
  createSteps: boolean = false;
  //Set types for a Recipe
  recipeTitle: string;
  recipeCreator: string;
  recipeDescription: string;
  //Replace this, or fill it with the user.steps array from the backend
  allRecipes: any[] = [];
  //probably not the best way to do this but since I am just learning and trying to figure Angular out
  //make an object that will act as a temp holder for whatever the last recipe created was, then...
  //a new Recipe is initialized, open up the new steps form based on the createSteps boolean, then close, done
  editRecipe = {user: "", title:"", description:"",steps:[] };
  //this array must hold newly added Steps
  showSteps = []
  stepTitle: string
  stepDescription: string
  stepImageUrl: string
  stepVideoUrl: string
  
 
  newStepsMethod(stepTitleVal, stepDescriptionVal, stepImageUrlVal, stepVideoUrlVal){
    if (!stepTitleVal) {
      return alert("Step must atleast have a title")
    }
    const currentSteps = this._newRecipe.addStepsToRecipe(stepTitleVal, stepDescriptionVal, stepImageUrlVal, stepVideoUrlVal);
    this.editRecipe.steps.push(currentSteps)
    //Remove this console when done
    console.log(this.editRecipe)
    //This is to list steps are you are creating them
    this.showSteps = this.editRecipe.steps
        //Once submitted reset all variables
        this.stepTitle = "";
        this.stepDescription = "";
        this.stepImageUrl = "";
        this.stepVideoUrl = "";
  }
  newRecipeMethod(
    recipeCreator: string,
    recipeTitle: string,
    recipeDescription: string,
    ){
      if (!recipeTitle) {
        return alert("Recipe must atleast have a title")
      }
    const currentRecipe = this._newRecipe.createRecipe(recipeCreator,recipeTitle, recipeDescription,);
    this.allRecipes.push(currentRecipe)
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
    //Temporarily set this to local storage so I don't have to keep typing in the data
    // let recipe = JSON.stringify(this.editRecipe)
    // localStorage.setItem("chippy",recipe)
    let demoRecipe = localStorage.getItem('chippy');
    this._sails.saveNewRecipesToUser(demoRecipe)
    // console.log(this.editRecipe, "Submit this to the backend as a JSON token")
  }

}



  //when submitting a new recipe, set the values and push to the allRecipes array
  //This will be replaced with my service
  // handleNewRecipe(userVal, titleVal, descriptionVal) {
  //   //Basic error checking to make sure recipe has atleast a title
  //   if (!titleVal) {
  //     return alert("Recipe must atleast have a title")
  //   }
  //   //Create a new recipe, push it onto the allRecipe array and change mode for recipe editing
  //   //new Recipe should have User, Title, Description, Steps array
  //   let currentRecipe = new RecipeModel(userVal, titleVal, descriptionVal, [])
  //   this.allRecipes.push(currentRecipe)
  //   this.editRecipe = currentRecipe;
  //   this.createSteps = true;
  // }
  //Set types for new Steps


    //Handle adding new steps once a recipe has been initialised
  //Each new step is added to the current editRecipe steps array
  // handleNewStep(stepTitleVal, stepDescriptionVal, stepImageUrlVal, stepVideoUrlVal ){
  //   if (!stepTitleVal) {
  //     return alert("Step must atleast have a title")
  //   }
  //   let newStep = new Steps(stepTitleVal, stepDescriptionVal, stepImageUrlVal, stepVideoUrlVal)
  //   this.editRecipe.steps.push(newStep)
  //   this.showSteps = this.editRecipe.steps

  // }