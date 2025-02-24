import { ReactNode } from "react";
import "./NavButton.css";
import { NavLink } from "react-router";

const NavButton = ({
  name,
  route,
  icon,
}: {
  name: string;
  route: string;
  icon: ReactNode;
}) => {
  route;
  name;
  return (
    <div className="nav_button">
      <NavLink to={route}>
        <div className="icon_frame">{icon}</div>
        <p className="btn_label">{name}</p>
      </NavLink>
    </div>
  );
};

export default NavButton;
