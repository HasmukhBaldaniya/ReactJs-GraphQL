import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { CharacterDetails, CharactersList, SearchComp, MutationComp } from "./pages/index";

const App = () => {
  return (
    <div>
      <Routes>
        <Route strict exact path="/" element={<CharactersList />} />
        <Route strict exact path="/:characterId" element={<CharacterDetails />} />
        <Route strict exact path="/search" element={<SearchComp />} />
        <Route strict exact path="/create-product" element={<MutationComp />} />
      </Routes>
    </div>
  );
};

export default App;
