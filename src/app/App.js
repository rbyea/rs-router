import React from "react";
import Header from "./components/common/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/common/Home";
import Heros from "./components/common/Heros";
import Episode from "./components/common/Episode";
import Location from "./components/common/Location";
import HeroItem from "./components/common/HeroItem";
import LocationItem from "./components/common/LocationItem";
import EpisodeItem from "./components/common/EpisodeItem";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heros" element={<Heros />} />
        <Route path="/heros/:id" element={<HeroItem />} />
        <Route path="/episode" element={<Episode />} />
        <Route path="/episode/:id" element={<EpisodeItem />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<LocationItem />} />
      </Routes>
    </div>
  );
}

export default App;
