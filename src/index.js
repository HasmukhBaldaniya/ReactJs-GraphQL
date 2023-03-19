import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://hasura.io/learn/graphql",
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDYzZjViZjNhMTIxY2YwMDdhMmRkNWNjYyJ9LCJuaWNrbmFtZSI6ImdyYXBocWwiLCJuYW1lIjoiZ3JhcGhxbEBtYWlsaW5hdG9yLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9kYTY0MDUxMDIzM2YxNzk5NjAxM2Q1NTIyMDA0YzBlMj9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmdyLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIzLTAzLTE5VDA4OjE2OjQyLjAxMVoiLCJpc3MiOiJodHRwczovL2dyYXBocWwtdHV0b3JpYWxzLmF1dGgwLmNvbS8iLCJhdWQiOiJQMzhxbkZvMWxGQVFKcnprdW4tLXdFenFsalZOR2NXVyIsImlhdCI6MTY3OTIxMzgwMywiZXhwIjoxNjc5MjQ5ODAzLCJzdWIiOiJhdXRoMHw2M2Y1YmYzYTEyMWNmMDA3YTJkZDVjY2MiLCJhdF9oYXNoIjoiSlF0UUVLMUw3WTN1SVNNMUU3R3I5dyIsInNpZCI6Ik4xWS1lT2QyRVUyR0dxYktUUnBjQ1o0Nm5zVkF5MVlXIiwibm9uY2UiOiJEY00uNi5UM2hqcX53ai5sbHV6Q3ZvWW5TRk5ib0wwYiJ9.D-GHl4s4lkhGtsnnCmFZnIJ0EAAWQysIiZ_TElk7ADINbLaPLjhw3e5xm0M-lrNLRwHzmFhW5aPVEvkC8Xa4tgSjXmjmznfC24I8GtMDXYF8buI-C_RgTyxQyn4A5zZ2uzBxY6K5UY44Yqw35opDSwe_EHp34h0Dq2L9Tk7LuqWVh5BhLB0F7hxIPlpg9j4DjLKl3iCkFfPFKQI15V_dSbr9LawdsbAXRzmDrPGL39Dee52DoY7bgyCwpq2Xqn2be7Tm3FKXR1z19NOLK3S5lt9aeB1_HUmIM_EKLozjPynGteFeiWKcrcYW2eFXrloo0VuNq5T9aeimJfZy-C6EgA"
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
