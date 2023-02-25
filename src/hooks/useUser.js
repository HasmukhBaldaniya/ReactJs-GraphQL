import { useQuery, gql } from "@apollo/client";

const GET_USER = gql`
  query GetTodo($id: String!) {
    users_by_pk(id: $id) {
      id
      name
    }
  }
`;

export const useUser = (id) => {
  const { error, data, loading } = useQuery(GET_USER, {
    variables: { id },
  });
  return {
    error,
    data,
    loading,
  };
};
