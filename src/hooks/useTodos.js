import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    todos {
      title
      is_public
      id
    }
    users {
    name
    id
  }
  }
`;

export const useTodos = () => {
  const { error, data, loading } = useQuery(GET_CHARACTERS);
  return {
    error,
    data,
    loading,
  };
};
