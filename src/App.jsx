import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Films from "../src/Pages/Films";
import People from "../src/Pages/People";
import Starships from "../src/Pages/Starships";
import Vehicles from "../src/Pages/Vehicles";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <>
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<People />} />
          <Route path="/people" element={<People />} />
          <Route path="/films" element={<Films />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/vehicles" element={<Vehicles />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
