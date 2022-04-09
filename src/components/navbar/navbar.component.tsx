import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from "../../assets/images/shared/logo.svg";
import { ReactComponent as IconClose } from "../../assets/images/shared/icon-close.svg";
import { ReactComponent as IconHamburger } from "../../assets/images/shared/icon-hamburger.svg";
import { NavBarLink } from "./nav-link.component";
import { AppContext } from "../../context";

export const Navbar = () => {
  const { isNavBarOpen, setIsNavBarOpen } = useContext(AppContext);
  const navBarLinks = (
    <ul className="nav-links">
      <NavBarLink to={"/"} linktext="00 Home" />
      <NavBarLink to={"/destination"} linktext="01 Destination" />
      <NavBarLink to={"/crew"} linktext="02 Crew" />
      <NavBarLink to={"/technology"} linktext="03 Technology" />
    </ul>
  );

  return (
    <Fragment>
      <header className="header-lg">
        <div className="logo">
          <Logo />
          <div className="divider"></div>
        </div>
        <nav className="nav">{navBarLinks}</nav>
      </header>

      <header className="header-sm">
        <div className="logo">
          <Logo />
        </div>
        <IconHamburger className="icon" onClick={() => setIsNavBarOpen(true)} />

        
      </header>
      {isNavBarOpen && (
          <div className="nav-drawer">
            <div className="nav-drawer-close-icon">
              <IconClose
                onClick={() => setIsNavBarOpen(!isNavBarOpen)}
                className="icon"
              />
            </div>
            {navBarLinks}
          </div>
        )}
    </Fragment>
  );
};
