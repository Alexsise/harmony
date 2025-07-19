import styles from "./NavBar.module.css";

import {NavButton} from "@/components/NavButton/NavButton";
import Home from "@icons/home.svg?react";
import Settings from "@icons/settings.svg?react";
import LiveTrade from "@icons/live_trade.svg?react";

export function NavBar() {
  return (
    <nav className={styles.navigation}>
      <NavButton urlPath="/" label="Home" Icon={<Home />} />
      <NavButton urlPath="/live_trade" label="Live Trade" Icon={<LiveTrade />} />
      <NavButton urlPath="/settings" label="Settings" Icon={<Settings />} />
    </nav>
  );
};
