import { Injectable } from "@angular/core";
import { BehaviorSubject,
Observable } from 'rxjs';

@Injectable()
export class RecipeStep {

    public stepsInView: [] = [];
    watchedUserData = new BehaviorSubject<any>(this.hasStepsData());
    private hasStepsData(): any {
        return this.stepsInView;
    }
    getStepData(): Observable<any> {
        return this.watchedUserData.asObservable();
    }
    setCurrentRecipeToView(steps) {
        this.stepsInView = steps
        console.log(steps)
        this.watchedUserData.next(this.stepsInView)
    }
}
