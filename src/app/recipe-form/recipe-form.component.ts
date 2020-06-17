import { Component, Input } from '@angular/core';
import {NewRecipe} from '../recipe.service';
import {SailsService} from '../sailsBackEnd.service';
import { Observable } from "rxjs";
@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})

export class RecipeFormComponent {
//make observable for allUserRecipes and allow access to services
  constructor(private _newRecipe:NewRecipe, private _sails:SailsService ) {
    this.allUserRecipes = _sails.userData()
   }
  //Function to subscribe to incoming userData
  getsUserDataAndRecipes() {
    this.allUserRecipes.subscribe(user => this.loggedInUserDetails = user);
  } 
  ngOnInit() {
  this.getRecipes();
  } 
  
  getRecipes(){
    //calls fetch to the backend if user is already logged in with token
    //TODO: fix bug 
    // core.js:6228 ERROR TypeError: Cannot read property 'recipes' of undefined
    // at RecipeFormComponent_Template (recipe-form.component.html:27)
    // Only happens when access token is used to fetch backend data, could be the way I am subscribing or using data state?
    if(localStorage.getItem('access_token')){
      this._sails.getCurrentUserData()
    }
    //Calls the subscribed user data for any changes
    this.getsUserDataAndRecipes();
  }
  loggedInUserDetails: any
  allUserRecipes : Observable<any>;
  //Creation Mode
  createSteps: boolean = false;
  //Set types for a Recipe
  recipeTitle: string;
  recipeCreator: string;
  recipeDescription: string;
  //Replace this, or fill it with the user.steps array from the backend
  // allRecipes= [];
  //probably not the best way to do this but since I am just learning and trying to figure Angular out
  //make an object that will act as a temp holder for whatever the last recipe created was, then...
  //a new Recipe is initialized, open up the new steps form based on the createSteps boolean, then close, done
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
    //Remove this console when done
    // console.log(this.editRecipe)
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
    //Temporarily set this to local storage so I don't have to keep typing in the data
    let recipe = JSON.stringify(this.editRecipe)
    // localStorage.setItem("chippy",recipe)
    // let demoRecipe = localStorage.getItem('chippy');
    this._sails.saveNewRecipesToUser(recipe)
    // console.log(this.editRecipe, "Submit this to the backend as a JSON token")
  }
}