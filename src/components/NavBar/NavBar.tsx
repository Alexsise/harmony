import "./NavBar.css";
import NavButton from "../NavButton/NavButton";
import Home from "@icons/home.svg?react";
import Settings from "@icons/settings.svg?react";
import LiveTrade from "@icons/live_trade.svg?react";

const NavBar = () => {
  return (
    <div className="navigation">
      <NavButton name="Home" route="/" icon={<Home />} />
      <NavButton name="Live Trade" route="/live_trade" icon={<LiveTrade />} />
      <NavButton name="Settings" route="/settings" icon={<Settings />} />
    </div>
  );
};

export default NavBar;
