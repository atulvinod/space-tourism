export class TechnologyModel {
  title: string;
  imageLandscape: string;
  imagePortrait: string;
  description: string;
  constructor(
    title: string,
    imagePotrait: string,
    imageLandscape: string,
    description: string
  ) {
    this.title = title;
    this.imageLandscape = imageLandscape;
    this.description = description;
    this.imagePortrait = imagePotrait;
  }
}
