import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ImageView,
  PageTitle,
  PlanetDetails,
  SubNavbar,
} from "../../components";
import { NavPathModel, PlanetDetailsModel } from "../../models";

export const DestinationPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!params.pagename) {
      navigate("/destination/moon");
    }
  }, []);

  const getPlanetDetails = (planet: string) => {
    switch (planet) {
      case "mars":
        return new PlanetDetailsModel(
          "mars",
          "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
          "225 Mil. KM",
          "9 Months"
        );
      case "europa":
        return new PlanetDetailsModel(
          "europa",
          "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
          "628 Mil Km",
          "3 Years"
        );

      case "titan":
        return new PlanetDetailsModel(
          "titan",
          "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
          "1.6 Bil Km",
          "7 years"
        );
      default:
        return new PlanetDetailsModel(
          "moon",
          "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          "384,400 KM",
          "3 Days"
        );
    }
  };

  return (
    <div className="destination-screen page-content-container">
      <div className="content-container">
        <div className="destination-image-view">
          <PageTitle pageTitle="Pick Your destination" pageNumber="01" />
          <ImageView />
        </div>
        <div className="destination-details-container">

          <div className="destination-subnav-container">
            <SubNavbar
              paths={[
                new NavPathModel("/destination/moon", "moon"),
                new NavPathModel("/destination/mars", "mars"),
                new NavPathModel("/destination/europa", "europa"),
                new NavPathModel("/destination/titan", "titan"),
              ]}
            />
          </div>
          <div className="destination-details">
            <PlanetDetails
              planetDetails={getPlanetDetails(params.pagename as string)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
