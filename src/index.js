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
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDYzZjViZjNhMTIxY2YwMDdhMmRkNWNjYyJ9LCJuaWNrbmFtZSI6ImdyYXBocWwiLCJuYW1lIjoiZ3JhcGhxbEBtYWlsaW5hdG9yLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9kYTY0MDUxMDIzM2YxNzk5NjAxM2Q1NTIyMDA0YzBlMj9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmdyLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIzLTAyLTIyVDA3OjA3OjQwLjA2MFoiLCJpc3MiOiJodHRwczovL2dyYXBocWwtdHV0b3JpYWxzLmF1dGgwLmNvbS8iLCJhdWQiOiJQMzhxbkZvMWxGQVFKcnprdW4tLXdFenFsalZOR2NXVyIsImlhdCI6MTY3NzEyNTgwMywiZXhwIjoxNjc3MTYxODAzLCJzdWIiOiJhdXRoMHw2M2Y1YmYzYTEyMWNmMDA3YTJkZDVjY2MiLCJhdF9oYXNoIjoib2ZfLTU1c0V3SjZlZXp5Tm41N1JTQSIsInNpZCI6InplT1B3amFScS14YWhLVWdkRUsyOEYyWjdVYkNBNV90Iiwibm9uY2UiOiJRcGUxeE5kY2IxdUhfQW1YZVFsSFRkSjJTZVF6cWp-SiJ9.q5fA4bLEQtN8klXQBQulsVWdMrx4-Bybwy72QRQlwOAo_OIK4oWoKuK8Di2Ubqo4j9vQ00Ki96Stx5X2Vpjiv3T9QzOiHSaZy4OysA2lcYxR_gvzjJw6xux5jSq7HCAcvDwRIgdmSuMYtdZ4_m3nSakwtBPiXsHVAE9P0mIs0M6Uysy53jQpxtl7cNsSiRdl1ebBvryKoTmrw4TmYBt-OB70_N7zIhyeeCNd9eZYV4Y0TgBWeBpJgSEVI3yON-VaGiEWrAp41HhQEYSPG1i6NveQ3JU0PZQM5dSAYib0M1OkM5mPOG5OYKNdE5BeTXX0ougJ0jwBB-HreeoliLkiDw"
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
