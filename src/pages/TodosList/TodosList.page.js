/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import { useTodos } from "./../../hooks/useTodos";
import { DELETE_TODO } from "./../../hooks/useTodo";
import "./TodosList.scss";

const TodosList = () => {
  const [todoId, setTodoId] = useState();
  const navigation = useNavigate();
  
  // Get todo list 
  const { error, data, loading } = useTodos();

  // Delete todo list
  const [DeleteTodo, { error: err, data: resData, loading: waiting }] =
    useMutation(DELETE_TODO, {
      variables: { id: todoId },
    });

  useEffect(() => {
    if (todoId) {
      DeleteTodo();
    }
  }, [todoId]);
  
  useEffect(() => {
    if (resData) {
      DeleteTodo();
    }
  }, [todoId]);

  if (error) return <div>{error}</div>;
  if (loading) return <div>{"Loading....."}</div>;

  return (
    <div className="characterList">
      <div className="table-container">
        <div className="table-header">
          <h2>Todos List Using GraphQL</h2>
          <button onClick={() => navigation("/todo/add")}>Add Todo</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {data.todos.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>
                    <Link to={"/todo/detail/" + item.id}>View</Link>
                    <Link to={"/todo/update/" + item.id}>Edit</Link>
                    <button
                      onClick={() => {
                        setTodoId(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="table-container">
        <div className="table-header">
          <h2>Users List Using GraphQL</h2>
          <button>Add User</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {data.users.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <Link to={"/user/detail/" + item.id}>View</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodosList;
