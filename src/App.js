import React from "react";
import { Route, Routes } from "react-router";
import "./App.scss";
import {
  TodoDetails,
  TodosList,
  SearchComp,
  MutationComp,
  UserDetails,
} from "./pages/index";

const App = () => {
  return (
    <div>
      <Routes>
        <Route strict exact path="/" element={<TodosList />} />
        <Route strict exact path="/todo/:todoId" element={<TodoDetails />} />
        <Route strict exact path="/user/:userId" element={<UserDetails />} />
        <Route strict exact path="/search" element={<SearchComp />} />
        <Route strict exact path="/create-product" element={<MutationComp />} />
      </Routes>
    </div>
  );
};

export default App;
