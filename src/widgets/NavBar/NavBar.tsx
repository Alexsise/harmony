import "./NavBar.css";
import {NavButton} from "@/components/NavButton/NavButton";
import Home from "@icons/home.svg?react";
import Settings from "@icons/settings.svg?react";
import LiveTrade from "@icons/live_trade.svg?react";

const NavBar = () => {
  return (
    <nav className="navigation">
      <NavButton urlPath="/" label="Home" Icon={<Home />} />
      <NavButton urlPath="/live_trade" label="Live Trade" Icon={<LiveTrade />} />
      <NavButton urlPath="/settings" label="Settings" Icon={<Settings />} />
    </nav>
  );
};

export default NavBar;
