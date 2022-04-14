import { useParams } from "react-router-dom";
import europa from "../../../assets/images/destination/image-europa.png";
import moon from "../../../assets/images/destination/image-moon.png";
import titan from "../../../assets/images/destination/image-titan.png";
import mars from "../../../assets/images/destination/image-mars.png";
import { Fragment } from "react";

export const ImageView = () => {
  const params = useParams();

  const getImage = (pagename: string) => {
    switch (pagename) {
      case "europa":
        return europa;
      case "mars":
        return mars;
      case "titan":
        return titan;
      default:
        return moon;
    }
  };

  return (
    <img
      className="planet-image-view"
      src={getImage(params.pagename as string)}
    />
  );
};
