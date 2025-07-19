import styles from "./Header.module.css";

import Package from "@/../package.json";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <span className={styles.name}>Harmony </span>
        <span className={styles.version}>v{Package.version}</span>
      </div>
    </header>
  );
};

export default Header;
