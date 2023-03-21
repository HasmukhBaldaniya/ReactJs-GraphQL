/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import { useTodos } from "./../../hooks/useTodos";
import { DELETE_TODO } from "./../../hooks/useTodo";
import "./TodosList.scss";

const PAGINATION_ARRY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const TodosList = () => {
  const [todoId, setTodoId] = useState();
  const [searchText, setSearchText] = useState({
    title: "",
    name: "",
    limit: 10,
    offset: 10,
  });
  const navigation = useNavigate();

  // Get todo list
  const { refetch, error, data, loading } = useTodos(searchText);

  // Delete todo list
  const [DeleteTodo, { error: err, data: resData, loading: waiting }] =
    useMutation(DELETE_TODO, {
      variables: { id: todoId },
    });

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  useEffect(() => {
    if (todoId) {
      DeleteTodo();
    }
  }, [todoId]);

  useEffect(() => {
    if (resData) {
      refetch();
    }
  }, [resData]);

  if (error) return <div>{error}</div>;

  return (
    <div className="characterList">
      <div className="table-container">
        <div className="table-header">
          <h2>Todos List Using GraphQL</h2>
          <button onClick={() => navigation("/todo/add")}>Add Todo</button>
        </div>

        <div className="table-header">
          <input
            type="text"
            placeholder="Search title"
            onChange={(e) =>
              setSearchText({ ...searchText, title: e.target.value })
            }
          />
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Details</th>
            </tr>
          </thead>

          {loading ? (
            <tbody>
              <tr>
                <td colSpan={4}>Loading.....</td>
              </tr>
            </tbody>
          ) : data.todos && data.todos.length > 0 ? (
            <tbody>
              {data?.todos.map((item) => {
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
          ) : (
            <tbody>
              <tr>
                <td colSpan={4}>No todo data found</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>

      <div className="table-container">
        <div className="table-header">
          <h2>Users List Using GraphQL</h2>
          <button>Add User</button>
        </div>
        <div className="table-header">
          <input
            type="text"
            placeholder="Search name"
            onChange={(e) =>
              setSearchText({ name: e.target.value, offset: null, limit: 10 })
            }
          />
        </div>

        <table>
          <thead>
            <tr>
              <th width="50">Sr. No</th>
              <th>ID</th>
              <th>Name</th>
              <th>Details</th>
            </tr>
          </thead>
          {loading ? (
            <tbody>
              <tr>
                <td colSpan={4}>Loading.....</td>
              </tr>
            </tbody>
          ) : data.users && data.users.length > 0 ? (
            <tbody>
              {data?.users.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <Link to={"/user/detail/" + item.id}>View</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan={4}>No users data found</td>
              </tr>
            </tbody>
          )}

          <tfoot>
            <tr>
              <td colSpan={4}>
                <div class="pagination">
                  {PAGINATION_ARRY.map((pageNo) => (
                    <button
                      type="button"
                      onClick={() =>
                        setSearchText({
                          ...searchText,
                          offset: searchText.limit * pageNo,
                        })
                      }
                      className={
                        searchText.offset === pageNo * 10
                          ? "active"
                          : searchText.offset === null && pageNo === 1
                          ? "active"
                          : ""
                      }
                    >
                      {pageNo}
                    </button>
                  ))}

                  {/* <button type="button" onClick={() => setSearchText({...searchText, offset: (searchText.limit)})} className={searchText.offset === (searchText.limit) ? 'active': ''}>1</button>
                  <button type="button" onClick={() => setSearchText({...searchText, offset: (searchText.limit + 10)})} className={searchText.offset === (searchText.limit + 10) ? 'active': ''}>2</button>
                  <button type="button" onClick={() => setSearchText({...searchText, offset: (searchText.limit + 20)})} className={searchText.offset === (searchText.limit + 20) ? 'active': ''}>3</button>
                  <button type="button" onClick={() => setSearchText({...searchText, offset: (searchText.limit + 30)})} className={searchText.offset === (searchText.limit + 30) ? 'active': ''}>4</button>
                  <button type="button" onClick={() => setSearchText({...searchText, offset: (searchText.limit + 40)})} className={searchText.offset === (searchText.limit + 40) ? 'active': ''}>5</button>
                  <button type="button" onClick={() => setSearchText({...searchText, offset: (searchText.limit + 50)})} className={searchText.offset === (searchText.limit + 50) ? 'active': ''}>6</button>
             */}
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default TodosList;
