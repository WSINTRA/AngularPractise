export class RecipeModel {
    constructor(
       
        repTitle: string,
        repDescription: string,
        repSteps: any
    ) {
  
        this.title = repTitle;
        this.description = repDescription;
        this.steps = repSteps;
    }

    title: string;
    description: string;
    steps: any;

}