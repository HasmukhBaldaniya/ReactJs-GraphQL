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
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDYzZjViZjNhMTIxY2YwMDdhMmRkNWNjYyJ9LCJuaWNrbmFtZSI6ImdyYXBocWwiLCJuYW1lIjoiZ3JhcGhxbEBtYWlsaW5hdG9yLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9kYTY0MDUxMDIzM2YxNzk5NjAxM2Q1NTIyMDA0YzBlMj9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmdyLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIzLTAzLTE5VDA4OjE2OjQyLjAxMVoiLCJpc3MiOiJodHRwczovL2dyYXBocWwtdHV0b3JpYWxzLmF1dGgwLmNvbS8iLCJhdWQiOiJQMzhxbkZvMWxGQVFKcnprdW4tLXdFenFsalZOR2NXVyIsImlhdCI6MTY3OTM4MTUzNCwiZXhwIjoxNjc5NDE3NTM0LCJzdWIiOiJhdXRoMHw2M2Y1YmYzYTEyMWNmMDA3YTJkZDVjY2MiLCJhdF9oYXNoIjoiSUJfNExQeHMtRnBqMWdSeFdVTVNsQSIsInNpZCI6Ik4xWS1lT2QyRVUyR0dxYktUUnBjQ1o0Nm5zVkF5MVlXIiwibm9uY2UiOiJNRE5MOHB3bGRLMk1kQnM3UFQuOWM0bnc1a3VSYml4TiJ9.GtTUTQwBcFvihS3sycagWKNrTeByE04ZJowVLG9-vrEqNJXxBxNyHH8SILIoFYOXzWIPJPjpO8-tFe_KIwvQ8qCZgZpMXtKtWrvfgKjOd4UNuhNX_cLQwD4WlPcsa4eDEdumnvTZh395Z6xSg67aix6V7VCgCAn-53TGXJ8-phJ9PS_bm2UgTJsEJ7wLGv4RBKiCCFEoUUhT8ISc2MvFPzY8KrBshliyYojDRxbHt5RS2m3DX2ILw7a6-J8LHFilkmXjtuTMr6QipNPton7lWYO6UcEWxiXxRg1jHurfO-fjlH0Jrwnj5uxghtnlHwT0ha7af2i850CYlMiAoHKwPA"
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
