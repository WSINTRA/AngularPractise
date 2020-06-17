export class Steps {
    constructor(
        stepTitle: string,
        stepDescription: string,
        stepImageUrl: string = "",
        stepVideoUrl: string = "",
        stepTime: number,
    ){
        this.title = stepTitle;
        this.description = stepDescription;
        this.imageUrl = stepImageUrl;
        this.videoUrl = stepVideoUrl;
        this.stepTime = stepTime;
    }
    title: string
    description: string
    imageUrl: string
    videoUrl: string
    stepTime: number
}
