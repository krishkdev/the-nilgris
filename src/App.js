import React from "react";
//import "normalize.css";
import "./App.css";
import LargeHero from "./components/LargeHero/LargeHero";
import MenuItems from "./components/NavBar/MenuItems";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div>
      <section className="showcase">
        <NavBar />
        <LargeHero />
      </section>
      <MenuItems />
    </div>
  );
};

export default App;
