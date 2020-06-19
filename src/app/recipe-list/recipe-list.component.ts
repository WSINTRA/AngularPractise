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
  }
  //currentUser passed down from app-recipe
  @Input() currentUser:{user:string, recipes:[]};
  
}
