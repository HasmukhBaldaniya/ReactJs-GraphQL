/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useParams } from "react-router-dom";
import { useTodo } from "./../../hooks/useTodo";
import "./TodoDetails.css";

const TodoDetails = () => {
  const param = useParams();
  const { error, data, loading } = useTodo(param["todoId"]);
  if (error) return <div>{error}</div>;
  if (loading) return <div>{"Loading....."}</div>;

  return (
    <>
      <div className="character-details">
        <div className="character-episode">
          <h2>{data.todos_by_pk.id}</h2>
          <h4>{data.todos_by_pk.title}</h4>
          <div>{data.todos_by_pk.user.name}</div>
        </div>
      </div>
    </>
  );
};

export default TodoDetails;
