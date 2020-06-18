import { Component, OnInit, Input } from '@angular/core';
import { RecipeStep } from '../../recipeStep.service';

@Component({
  selector: 'app-step-list',
  templateUrl: './step-list.component.html',
  styleUrls: ['./step-list.component.scss'],
})
export class StepListComponent implements OnInit {

  constructor(private _steps: RecipeStep) {
    this.allRecipesSteps = this._steps.getStepData()
   }
  allRecipesSteps
  ngOnInit(): void {
    this.showSteps()
  }
showSteps(){
  this.allRecipesSteps.subscribe(steps=> this.currentSteps = steps)
}
currentSteps;
}
