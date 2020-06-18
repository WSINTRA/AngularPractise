import { Component, OnInit, Input,} from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor() {  
  }
 
  ngOnInit(): void {
    //Once currentUser is initialised, set the user recipes to the recipeList
    if(this.currentUser){
      this.recipeList = this.currentUser.recipes;
    }
  }
  //currentUser passed down from app-recipe
  @Input() currentUser;
  recipeList;

  //debug button
  debug(){
    console.log(this.currentUser)
  }
}
