import { Injectable } from "@angular/core";

@Injectable()
export class RecipeStep {

    private newSteps = []

    public get currentSteps(){
        return this.newSteps
    }
    public set newStep(newStepItem: object) {
        this.newSteps.push(newStepItem);
    }


}

