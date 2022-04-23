export class CrewModel {
  designation: string;
  name: string;
  description: string;
  imagePath: string;
  constructor(
    designation: string,
    name: string,
    description: string,
    imagePath: string
  ) {
    this.description = description;
    this.name = name;
    this.imagePath = imagePath;
    this.designation = designation;
  }
}
