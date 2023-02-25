/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import { ADD_TODO, UPDATE_TODO, useTodo } from "./../../hooks/useTodo";
import "./AddEditTodo.scss";

const AddEditTodo = () => {
  const param = useParams();
  const navigation = useNavigate();
  const [title, setFormData] = useState("");
  const { data: detailRes, loading: waiting } = useTodo(param["todoId"]);

  const [OnSubmitTodoForm, { error, data, loading }] = useMutation(
    param["todoId"] ? UPDATE_TODO : ADD_TODO,
    {
      variables: param["todoId"] ? { id: +param["todoId"], title } : { title },
    }
  );

  useEffect(() => {
    if (data) {
      navigation("/");
    }
  }, [data]);

  useEffect(() => {
    if (detailRes) {
      setFormData(detailRes.todos_by_pk.title);
    }
  }, [detailRes]);

  if (error) return <div>{error}</div>;
  if (loading || waiting) return <div>{"Loading....."}</div>;

  return (
    <>
      <div className="todo-manage">
        <h2>{param["todoId"] ? "Update Todo" : "Add Todo"}</h2>
        <div>
          <input
            type={"text"}
            value={title}
            placeholder="Enter title"
            onChange={(e) => setFormData(e.target.value)}
            required
          />{" "}
          <br />
          <br />
          <br />
          <button type="button" onClick={OnSubmitTodoForm}>
            {param["todoId"] ? "Update" : "Add"}
          </button>
          <button type="button" onClick={() => navigation("/")}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default AddEditTodo;
