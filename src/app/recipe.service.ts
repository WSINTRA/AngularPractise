import { Injectable } from "@angular/core";
import { RecipeModel } from './models/recipe.model';
import { Steps } from './models/steps.model';
//Creating an injectable service that I can call throughout the application 
//consisting of a object with the attributes of a Recipe
@Injectable()
export class NewRecipe {

    private titleVal: string; descriptionVal: string; stepArray: any
    
    createRecipe( title, description) {
        //Create a new blank recipe model
        let currentRecipe = new RecipeModel( this.titleVal, this.descriptionVal, this.stepArray)
        //Set the new Values
        currentRecipe.description = description;
        currentRecipe.title = title;
        currentRecipe.steps = [];
        return currentRecipe
    }
    addStepsToRecipe( stepTitleVal, stepDescriptionVal, stepImageUrlVal, stepVideoUrlVal,stepTimeVal,) {
        //Create a new step with incoming params
        let newStep = new Steps(stepTitleVal, stepDescriptionVal, stepImageUrlVal, stepVideoUrlVal,stepTimeVal,)
        
        return newStep
    }

}
