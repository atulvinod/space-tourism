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
      <h5 className="main-text">{props.planetDetails.description}</h5>
      <div className="details-divider" />
      <div className="details-stat-container">
        <div className="details-stat">
          <h5>Avg. Distance</h5>
          <h3> {props.planetDetails.avgDistance}</h3>
        </div>

        <div className="details-stat">
          <h5>Est. Travel time</h5>
          <h3>{props.planetDetails.travelTime}</h3>
        </div>
      </div>
    </div>
  );
};
