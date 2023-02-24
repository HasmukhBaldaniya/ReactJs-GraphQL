/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import "./UserDetails.scss";

const UserDetails = () => {
  const param = useParams();
  const navigation = useNavigate();
  const { error, data, loading } = useUser(param["userId"]);
  if (error) return <div>{error}</div>;
  if (loading) return <div>{"Loading....."}</div>;

  return (
    <>
      <div className="user-details">
        <button type="button" onClick={() => navigation("/")}>
          Back
        </button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{data.users_by_pk.id}</td>
              <td>{data.users_by_pk.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserDetails;
