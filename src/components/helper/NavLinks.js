import { NavLink } from "react-router-dom";

const NavAbout = ({ className }) => (
  <NavLink to="/about" className={className}>
    About
  </NavLink>
);

const NavTravel = ({ className }) => (
  <NavLink to="/" className={className}>
    Travel
  </NavLink>
);

export { NavAbout, NavTravel };
