import { Injectable } from "@angular/core";

//Creating an injectable service that I can call throughout the application 
//consisting of a object with the attributes of a Recipe
@Injectable()
export class NewRecipe {
    private recipeList: object = {user:"", title:"", description:"", steps:[]};

    public get currentRecipe(): object {
        return this.recipeList;
    }
    //This setter allows a user to create new values for a Recipe
    public set newRecipe(newRecipeObject: object){
        this.recipeList = newRecipeObject;
    }

}
