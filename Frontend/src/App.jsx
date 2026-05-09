import React from "react";
import "./css/App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import Favourites from "./pages/Favourites";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
        </Routes>
      </main>
    </MovieProvider>
  );
};

export default App;
