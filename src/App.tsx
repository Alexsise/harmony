import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <NavBar />

        <div className="content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="live_trade" element={<p>Live Trade!</p>} />
            <Route path="settings" element={<p>Settings!</p>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
