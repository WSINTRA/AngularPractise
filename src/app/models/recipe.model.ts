export class RecipeModel {
    constructor(
        repUser: string,
        repTitle: string,
        repDescription: string,
        repSteps: object,
    ) {
        this.user = repUser,
        this.title = repTitle;
        this.description = repDescription;
        this.steps = repSteps;
    }
    user: string;
    title: string;
    description: string;
    steps: object;

}