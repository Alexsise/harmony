import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
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
