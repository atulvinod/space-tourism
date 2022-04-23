import { FC } from "react";

import { NavLink } from "react-router-dom";
import { NavPathModel } from "../../../models";

export type SubNavBarProps = {
  paths: NavPathModel[];
};

export const SubNavbar: FC<SubNavBarProps> = (props) => {
  return (
    <div className="subnav">
      {props.paths.map((path) => (
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
