export class PlanetDetailsModel {
  planetName: string;
  description: string;
  avgDistance: string;
  travelTime: string;
  constructor(
    planetName: string,
    description: string,
    avgDistance: string,
    travelTime: string
  ) {
    this.planetName = planetName;
    this.description = description;
    this.avgDistance = avgDistance;
    this.travelTime = travelTime;
  }
}
