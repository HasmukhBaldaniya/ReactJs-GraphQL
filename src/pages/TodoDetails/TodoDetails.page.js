/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTodo } from "./../../hooks/useTodo";
import "./TodoDetails.scss";

const TodoDetails = () => {
  const param = useParams();
  const navigation = useNavigate();
  const { error, data, loading } = useTodo(param["todoId"]);
  if (error) return <div>{error}</div>;
  if (loading) return <div>{"Loading....."}</div>;

  return (
    <>
      <div className="todo-details">
        <button type="button" onClick={() => navigation("/")}>
          Back
        </button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>User Name</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{data.todos_by_pk.id}</td>
              <td>{data.todos_by_pk.title}</td>
              <td>{data.todos_by_pk.user.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TodoDetails;
