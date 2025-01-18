import { ReactNode } from "react";
import "./NavButton.css";

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
      <div className="icon_frame">{icon}</div>
      <p>{name}</p>
    </div>
  );
};

export default NavButton;
