/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "./../../hooks/useCharacters";
import "./CharactersList.css";

const CharactersList = () => {
  const { error, data, loading } = useCharacters();

  if (error) return <div>{error}</div>;
  if (loading) return <div>{"Loading....."}</div>;

  return (
    <div className="characterList">
      {data.characters.results.map((item) => {
        return (
          <Link key={item.id} to={"/" + item.id}>
            <img src={item.image} alt="character image"/>
            <h2>{item.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default CharactersList;
