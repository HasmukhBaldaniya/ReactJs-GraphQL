/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useParams } from "react-router-dom";
import { useCharacter } from "./../../hooks/useCharacter";
import "./CharacterDetails.css";

const CharacterDetails = () => {
  const param = useParams();
  const { error, data, loading } = useCharacter(param["characterId"]);
  if (error) return <div>{error}</div>;
  if (loading) return <div>{"Loading....."}</div>;

  return (
    <>
      <div className="character-details">
        <img src={data.character.image} width={300} height={300} alt="" />

        <div className="character-episode">
          <h2>{data.character.name}</h2>
          <h4>{data.character.gender}</h4>

          {data.character.episode.map((item) => {
            return (
              <div>
                {item.name} - <b>{item.episode}</b>
              </div>
            );
          })}

        </div>
      </div>
    </>
  );
};

export default CharacterDetails;
