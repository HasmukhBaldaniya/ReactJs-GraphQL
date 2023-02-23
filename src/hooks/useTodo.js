import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query GetTodo($id: Int!) {
    todos_by_pk(id: $id) {
      id
      title
      is_public
      created_at
      user {
        id
        name
      }
    }
  }
`;

export const useTodo = (id) => {
  console.log(id);
  const { error, data, loading } = useQuery(GET_CHARACTER, {
    variables: { id },
  });
  return {
    error,
    data,
    loading,
  };
};
