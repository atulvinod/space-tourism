import { FC } from "react";
import { NavLink } from "react-router-dom";

export type NavBarLinkProps = {
  to: string;
  linktext: string;
};

export const NavBarLink: FC<NavBarLinkProps> = (props: any) => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        isActive ? "link nav-link__active" : "link"
      }
      {...props}
    >
      <li>
        <span>{props.linktext}</span>
      </li>
    </NavLink>
  );
};
