import { NavLink } from "react-router";
import type { ReactNode } from "react";

import styles from "./NavButton.module.css";

type NavButtonProps = {
  urlPath: string
  Icon: ReactNode, // Temporary solution
  label: string,
}

export function NavButton({urlPath, Icon, label}: NavButtonProps): JSX.Element  {
  return (
      <NavLink
      to={urlPath}
      end
      className={styles.button}>
        <div className={styles.frame}>{Icon}</div>
        <p className={styles.label}>{label}</p>
      </NavLink>
  );
};
