import { Component, OnInit, Input } from '@angular/core';
import { RecipeStep } from '../../recipeStep.service';


@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  constructor(private _steps: RecipeStep) {
    this.currentStep = this._steps.getCurrentStepData()
    
  }

  currentStep;
  ngOnInit(): void {
      this.getStep()   
      const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag); 
  }
  getStep(){
    this.currentStep.subscribe(currentStep => this.stepInView = currentStep)
  }
  stepInView
}
