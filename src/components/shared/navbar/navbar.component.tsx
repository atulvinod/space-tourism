import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from "../../../assets/images/shared/logo.svg";
import { ReactComponent as IconClose } from "../../../assets/images/shared/icon-close.svg";
import { ReactComponent as IconHamburger } from "../../../assets/images/shared/icon-hamburger.svg";
import { NavBarLink } from "./nav-link.component";
import { AppContext } from "../../../context";

type NavBarLinkModel = {
  pathTo: string;
  linkText: string;
};

export const Navbar = () => {
  const { isNavBarOpen, setIsNavBarOpen } = useContext(AppContext);

  const navBarLinks: NavBarLinkModel[] = [
    {
      linkText: "Home",
      pathTo: "/",
    },
    {
      linkText: "Destination",
      pathTo: "/destination",
    },
    {
      linkText: "Crew",
      pathTo: "/crew",
    },
    {
      linkText: "Technology",
      pathTo: "/technology",
    },
  ];

  return (
    <Fragment>
      <header className="header-lg">
        <div className="logo">
          <Logo />
          <div className="divider"></div>
        </div>
        <nav className="nav">
          <ul className="nav-links">
            {navBarLinks.map((e, i, a) => (
              <NavBarLink key={i} linktext={e.linkText} to={e.pathTo} />
            ))}
          </ul>
        </nav>
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
          <ul className="nav-links">
            {navBarLinks.map((e, i, a) => (
              <NavBarLink
                key={i}
                linktext={`0${i} ${e.linkText}`}
                to={e.pathTo}
              />
            ))}
          </ul>
        </div>
      )}
    </Fragment>
  );
};
