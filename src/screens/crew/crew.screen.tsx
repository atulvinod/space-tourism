import { ImageCarousel, PageTitle } from "../../components";
import douglashurley from "../../assets/images/crew/image-douglas-hurley.png";
import anousheh from "../../assets/images/crew/image-anousheh-ansari.png";
import mark from "../../assets/images/crew/image-mark-shuttleworth.png";
import victor from "../../assets/images/crew/image-victor-glover.png";
import { useState } from "react";
import { CrewModel } from "../../models";
export const CrewScreen = () => {
  const [currentImageIndex, setCurrentImage] = useState(0);

  const crewDetails = [
    new CrewModel(
      "commander",
      "douglas hurley",
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      douglashurley
    ),
    new CrewModel(
      "mission specialist",
      "mark shuttleworth",
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      mark
    ),
    new CrewModel(
      "pilot",
      "victor glover",
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
      victor
    ),
    new CrewModel(
      "flight engineer",
      "anousheh ansari",
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
      anousheh
    ),
  ];

  return (
    <div className="crew-screen page-content-container">
      <div className="content-container">
        <div className="content-row">
          <div className="content-main">
            <PageTitle pageTitle="Meet your crew" pageNumber="02" />
            <ImageCarousel
              images={crewDetails.map((crew) => crew.imagePath)}
              onImageChangeCallback={(index) => setCurrentImage(index)}
            />
            <h4 className="text-font__400 designation"> {crewDetails[currentImageIndex].designation}</h4>
            <h3 className="text-font__400 name">{crewDetails[currentImageIndex].name}</h3>
            <p className="description">
              {crewDetails[currentImageIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
