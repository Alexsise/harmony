import "./Header.css";
import Package from "../../../package.json";

const Header = () => {
  return (
    <header className="header">
      <div className="title">
        <span className="name">Harmony </span>
        <span className="version">v{Package.version}</span>
      </div>
    </header>
  );
};

export default Header;
