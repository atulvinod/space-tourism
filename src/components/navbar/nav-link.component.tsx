import { NavLink } from "react-router-dom";

export const NavBarLink = (props: any) => {
  const { to, linktext } = props;
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
      isActive ? "link nav-link__active" : 'link'
    }      {...props}
    >
      <li>
        <span>{linktext}</span>
      </li>
    </NavLink>
  );
};
