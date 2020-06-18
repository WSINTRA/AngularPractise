import { Injectable } from "@angular/core";
import { BehaviorSubject,
Observable } from 'rxjs';

@Injectable()
export class RecipeStep {

    public stepsInView: [] = [];
    public currentStep;
    watchedUserData = new BehaviorSubject<any>(this.hasStepsData());
    watchedStepData = new BehaviorSubject<any>(this.newStepData());
    
    private hasStepsData(): any {
        return this.stepsInView;
    }
    private newStepData(): any {
        return this.currentStep;
    }
    getCurrentStepData(): Observable<any> {
        return this.watchedStepData.asObservable();
    }
    getStepData(): Observable<any> {
        return this.watchedUserData.asObservable();
    }
    setCurrentStepToView(step){
        this.currentStep = step;
        this.watchedStepData.next(this.currentStep)
    }
    setCurrentRecipeToView(steps) {
        this.stepsInView = steps
        
        this.watchedUserData.next(this.stepsInView)
    }
}
