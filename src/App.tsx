import Header from "./widgets/Header/Header";
import NavBar from "./widgets/NavBar/NavBar";
import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <NavBar />

        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
