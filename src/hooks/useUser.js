import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query GetTodo($id: String!) {
    users_by_pk(id: $id) {
      id
      name
    }
  }
`;

export const useUser = (id) => {
  const { error, data, loading } = useQuery(GET_CHARACTER, {
    variables: { id },
  });
  return {
    error,
    data,
    loading,
  };
};
