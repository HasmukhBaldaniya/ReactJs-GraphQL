import { gql, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";

const GET_CHARACTER_LOCATION = gql`
  query GetCharacterLocation($name: String) {
    characters(filter: { name: $name }) {
      results {
        location {
            name
          }
      }
    }
  }
`;

export default function SearchComp() {
  const [searchValue, setSearchValue] = useState("");
  const [getLocation, { data, loading }] = useLazyQuery(
    GET_CHARACTER_LOCATION,
    {
      variables: { name: searchValue },
    }
  );

  return (
    <div>
      <input type={"text"} onChange={(e) => setSearchValue(e.target.value)} />
      <button type="button" onClick={getLocation}>
        Search
      </button>

      <div>
        {loading && 'Loading...'}
        {data && data.characters.results.map((item) => {
            return (
                <ul style={{margin: '10px'}} key={item.location.name}>
                    <li>{item.location.name}</li>
                </ul>
            )
        })}
      </div>
    </div>
  );
}
