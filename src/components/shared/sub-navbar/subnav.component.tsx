import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";
import { NavPathModel } from "../../../models";

export const SubNavbar = (props: any) => {
  const { paths }: { paths: NavPathModel[] } = props;
  return (
    <div className="subnav">
      {paths.map((path) => (
        <NavLink
          to={path.path}
          key={path.path}
          className={({ isActive }) =>
            isActive ? "link nav-link__active" : "link"
          }
        >
          <span>{path.pathLabel}</span>
        </NavLink>
      ))}
    </div>
  );
};

SubNavbar.propTypes = {
  paths: PropTypes.arrayOf(PropTypes.instanceOf(NavPathModel)).isRequired,
};
