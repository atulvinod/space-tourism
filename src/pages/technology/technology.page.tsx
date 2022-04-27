import {
  CarouselIndicatorLg,
  ImageCarouselLarge,
  PageTitle,
} from "../../components";
import { TechnologyModel } from "../../models";
import launchVehicleLandscape from "../../assets/images/technology/image-launch-vehicle-landscape.jpg";
import launchVehiclePortrait from "../../assets/images/technology/image-launch-vehicle-portrait.jpg";
import spaceCapsuleLandscape from "../../assets/images/technology/image-space-capsule-landscape.jpg";
import spaceCapsulePortrait from "../../assets/images/technology/image-space-capsule-portrait.jpg";
import spacePortLandscape from "../../assets/images/technology/image-spaceport-landscape.jpg";
import spacePortPortrait from "../../assets/images/technology/image-spaceport-portrait.jpg";
import { useState } from "react";

export const TechnologyPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const technologyDetails = [
    new TechnologyModel(
      "launch vehicle",
      launchVehiclePortrait,
      launchVehicleLandscape,
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    ),
    new TechnologyModel(
      "space port",
      spacePortPortrait,
      spacePortLandscape,
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    ),
    new TechnologyModel(
      "space capsule",
      spaceCapsulePortrait,
      spaceCapsuleLandscape,
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    ),
  ];

  return (
    <div className="technology-screen page-content-container">
      <div className="content-container">
        <div className="content-row">
          <div className="page-title-container">
            <PageTitle pagetitle="space launch 101" pagenumber="03" />
          </div>
          <div className="content-main">
            <div className="technology-image-carousel">
              <ImageCarouselLarge
                imagesLandscape={technologyDetails.map((e) => e.imageLandscape)}
                imagesPortrait={technologyDetails.map((e) => e.imagePortrait)}
                currentImage={currentIndex}
              />
            </div>
            <CarouselIndicatorLg
              totalSlides={technologyDetails.length}
              currentSlide={currentIndex}
              imageChangeCallback={(index: number) => {
                setCurrentIndex(index);
              }}
            />
            <div className="text-content">
              <span className="text-color__purple text-font__400 text-nav">
                the terminology...
              </span>
              <h3 className="text-font__400 title">
                {technologyDetails[currentIndex].title}
              </h3>
              <p className="description text-body">
                {technologyDetails[currentIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
