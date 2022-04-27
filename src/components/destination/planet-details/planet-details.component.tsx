import PropTypes from "prop-types";
import { FC } from "react";
import { PlanetDetailsModel } from "../../../models/";

export type PlanetDetailsProp = {
  planetDetails: PlanetDetailsModel;
};

export const PlanetDetails: FC<PlanetDetailsProp> = (props: any) => {
  return (
    <div className="planet-details">
      <h2 className="planet-details-heading">
        {props.planetDetails.planetName}
      </h2>
      <p className="text-body">{props.planetDetails.description}</p>
      <div className="details-divider" />
      <div className="details-stat-container">
        <div className="details-stat">
          <span className="text-subheading__2 d-block">Avg. Distance</span>
          <span className="text-subheading__1 d-block my-16"> {props.planetDetails.avgDistance}</span>
        </div>

        <div className="details-stat">
          <span className="text-subheading__2 d-block">Est. Travel time</span>
          <span className="text-subheading__1 d-block my-16">{props.planetDetails.travelTime}</span>
        </div>
      </div>
    </div>
  );
};
