import PropTypes from "prop-types";
import { PlanetDetailsModel } from "../../../models/";

export const PlanetDetails = (props: any) => {
  const { planetDetails }: { planetDetails: PlanetDetailsModel } = props;
  return (
    <div className="planet-details">
      <h2 className="planet-details-heading">{planetDetails.planetName}</h2>
      <h5 className="main-text">{planetDetails.description}</h5>
      <div className="details-divider" />
      <div className="details-stat-container">
        <div className="details-stat">
          <h5>Avg. Distance</h5>
          <h3> {planetDetails.avgDistance}</h3>
        </div>

        <div className="details-stat">
          <h5>Est. Travel time</h5>
          <h3>{planetDetails.travelTime}</h3>
        </div>
      </div>
    </div>
  );
};

PlanetDetails.propTypes = {
  planetDetails: PropTypes.instanceOf(PlanetDetailsModel).isRequired,
};
