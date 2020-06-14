export class Steps {
    constructor(
        stepTitle: string,
        stepDescription: string,
        stepImageUrl: string = "",
        stepVideoUrl: string = "",
    ){
        this.title = stepTitle;
        this.description = stepDescription;
        this.imageUrl = stepImageUrl;
        this.videoUrl = stepVideoUrl;
    }
    title: string
    description: string
    imageUrl: string
    videoUrl: string
}
