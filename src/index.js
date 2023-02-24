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
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDYzZjViZjNhMTIxY2YwMDdhMmRkNWNjYyJ9LCJuaWNrbmFtZSI6ImdyYXBocWwiLCJuYW1lIjoiZ3JhcGhxbEBtYWlsaW5hdG9yLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9kYTY0MDUxMDIzM2YxNzk5NjAxM2Q1NTIyMDA0YzBlMj9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmdyLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIzLTAyLTIyVDA3OjA3OjQwLjA2MFoiLCJpc3MiOiJodHRwczovL2dyYXBocWwtdHV0b3JpYWxzLmF1dGgwLmNvbS8iLCJhdWQiOiJQMzhxbkZvMWxGQVFKcnprdW4tLXdFenFsalZOR2NXVyIsImlhdCI6MTY3NzI0MDQzNiwiZXhwIjoxNjc3Mjc2NDM2LCJzdWIiOiJhdXRoMHw2M2Y1YmYzYTEyMWNmMDA3YTJkZDVjY2MiLCJhdF9oYXNoIjoieE5xWDlvZGpGOHhDNVl0VFBEQm5VQSIsInNpZCI6InplT1B3amFScS14YWhLVWdkRUsyOEYyWjdVYkNBNV90Iiwibm9uY2UiOiIzbjZlYXdTVENJbHBzZUQ1YndWVmdEaUI3UUg1eE5jSCJ9.IpSRnUeD3OHMHeZTNjy5PxOYlJM3-sVFkqp54TT91bzx5CbyKpa1BCgdQj-ndv4npwt8upr6XWmbmFGf7Xv8XT0lTWS9NkYQP6lASb6VssFsSGPZotYOhqPxbwzPbw2Kf4WzPly_9CGffGbuFhuJGt188iSPvay_QmaYzr5kL3zMHETdoWNj6vzXMvKisyxClsXilv1TegiYh6v5xTWzag28DRK-qIEWDea61BxR5fybgCbaTekg2QI2nP0M0cdEsoKWdZF-7eooGT1b1O5MGhHK7HKGY3foLixgMOFo9lElUWiuIMJhHL-Ip0bEIAc4PwgJMcLjGEhDo_0dcRI47Q"
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
